import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { PostgreStatusCode } from 'common/enums/enums';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DbUserService {
  constructor(private prisma: PrismaService) {}

  async create(createDbUserDto: any) {
    try {
      // Generate username if not provided
      const newUsername = createDbUserDto.username;

      // Validate input

      // Clear relevant caches
      // await cache.del('allUsers');
      // await cache.del('allAuths');
      // await cache.del('allUsers-minified');

      // Generate a unique referral code
      let referralCode = '';
      let isUnique = false;

      while (!isUnique) {
        referralCode = await this.generateCode(100000, 900000);
        const existingUser = await this.prisma.users_new.findUnique({
          where: { referral_code: referralCode },
        });
        if (!existingUser) {
          isUnique = true;
        }
      }
      // Create user
      const newUser = await this.prisma.users_new.create({
        data: {
          ...createDbUserDto,
          referral_code: referralCode,
          // invitation_link: 'https://www.ohhnft/', // Add any additional fields you need here
        },
      });

      // Log activity
      // await createActivity(newUser.user_id, 'Create new account', 'sign_up', 10, null);
      const newActivity = await this.prisma.activity.create({
        data: {
          user_id: newUser.user_id,   // Associate the activity with the existing user
          activity: 'Create new account',
          type: 'sign_up',
          points: 10,
          image: null
        },
      });

     
      return newUser;
    } catch (error) {
      throw new HttpException(error, PostgreStatusCode.BadRequestError);
    }
  }

  async generateCode(min: number, max: number) {
    const code = Math.floor(min + Math.random() * (max - min + 1));
    return code.toString();
  };

  async IsUserExit(email) {
    const user = await this.prisma.users_new.findUnique({
      where: {
        email: email, 
      },
    });
    return user ? true : false;   
  };
}
