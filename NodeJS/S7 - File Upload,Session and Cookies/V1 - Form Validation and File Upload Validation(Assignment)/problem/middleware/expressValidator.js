import { check, validationResult } from "express-validator";

export const formValidation = async (req, res, next) => {
  await Promise.all([
    check('name')
      .notEmpty()
      .withMessage('Name is required')
      .run(req),
    check('email')
      .isEmail()
      .withMessage('Enter a valid email')
      .run(req),
    check('image')
      .custom((value, { req }) => {
        if (!req.file) {
          throw new Error('Profile image is required');
        }
        return true;
      })
      .run(req),
  ]);

  const errors = validationResult(req);
  console.log("Validation errors:", errors);

  if (!errors.isEmpty()) {
    return res.render('upload-form', {
      errorMessage: errors.array()[0].msg,user:null
    });
  }

  next();
};