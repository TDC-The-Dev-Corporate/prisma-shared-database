enum PostgreStatusCode {
  InternalServerError = 500,
  ForbiddenError = 403,
  BadRequestError = 400,
  NotFoundError = 404,
  SuccessCode = 200,
  AuthorizationError = 401,
}

enum Languages {
  English = 'english',
  Spanish = 'spanish',
}

enum Roles {
  User = 'user',
  Admin = 'admin',
}

enum QuestionAvailability {
  Reached = 'reached',
  Available = 'available',
}

enum QuestionAskTime {
  Daily = 'daily',
  Weekly = 'weekly',
  Monthly = 'monthly',
}

enum Genders {
  Male = 'Male',
  Female = 'Female',
}

export {
  PostgreStatusCode,
  Languages,
  Roles,
  QuestionAvailability,
  QuestionAskTime,
  Genders,
}
