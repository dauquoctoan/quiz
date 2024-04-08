// import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
// import * as multer from 'multer';

// @Injectable()
// export class MulterMiddleware implements NestMiddleware {
//   resolve(): MiddlewareFunction {
//     return (req, res, next) => {
//       const upload = multer({ dest: 'uploads/' }).single('image');
//       upload(req, res, function (err) {
//         if (err) {
//           return res.status(500).json({ message: 'Failed to upload image' });
//         }
//         next();
//       });
//     };
//   }
// }