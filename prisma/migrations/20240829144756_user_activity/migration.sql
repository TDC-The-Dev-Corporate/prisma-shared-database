-- CreateTable
CREATE TABLE "Users_new" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "discord" TEXT,
    "twitter" TEXT,
    "show_discord" BOOLEAN DEFAULT false,
    "show_twitter" BOOLEAN DEFAULT false,
    "web" TEXT,
    "profile_image" TEXT,
    "package_id" INTEGER NOT NULL DEFAULT 1,
    "status" INTEGER NOT NULL DEFAULT 1,
    "remarks" TEXT,
    "password" TEXT,
    "discord_email" TEXT,
    "bio" TEXT,
    "location" TEXT,
    "linkedin" TEXT,
    "instagram" TEXT,
    "reddit" TEXT,
    "medium" TEXT,
    "figma" TEXT,
    "github" TEXT,
    "telegram" TEXT,
    "youtube" TEXT,
    "referral_code" TEXT,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "shard" INTEGER NOT NULL DEFAULT 0,
    "amp" INTEGER NOT NULL DEFAULT 0,
    "micro_amp" INTEGER NOT NULL DEFAULT 0,
    "locked_shard" INTEGER NOT NULL DEFAULT 0,
    "locked_amp" INTEGER NOT NULL DEFAULT 0,
    "locked_micro_amp" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_new_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "activity_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "activity" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'default',
    "points" INTEGER NOT NULL,
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("activity_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_new_username_key" ON "Users_new"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_new_email_key" ON "Users_new"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_new_discord_key" ON "Users_new"("discord");

-- CreateIndex
CREATE UNIQUE INDEX "Users_new_twitter_key" ON "Users_new"("twitter");

-- CreateIndex
CREATE UNIQUE INDEX "Users_new_discord_email_key" ON "Users_new"("discord_email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_new_referral_code_key" ON "Users_new"("referral_code");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users_new"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
