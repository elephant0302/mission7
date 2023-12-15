// index.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { specs } from './config/swagger.config.js';
import { userRouter} from './routes/user.route.js';
import { tempRouter } from './routes/temp.route.js';
import SwaggerUi from 'swagger-ui-express';
const app = express();
dotenv.config();

app.set('port',process.env.PORT||3000)
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/user',userRouter);
app.use(express.urlencoded({extended: false}));

app.use('/api-docs',SwaggerUi.serve,SwaggerUi.setup(specs));

app.use('/temp',tempRouter);
app.use('/user',userRouter);

app.use((err,req,res,next)=>{
    res.locals.message=err.message;
    res.locals.error=process.env.NODE_ENV !== 'production'?err:{};
    console.log("error",err);
    res.status(Err.data.status||status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});