import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet';

import routes from './routes';


const app = express ();

//helmet for secure
app.use(helmet());
//json conf
app.use(express.json()); //middleware req.body => json
app.use(express.urlencoded({extended:true}));

//morgan
app.use(morgan('dev'));
//cors
app.use(cors());

//routes

app.use('/api/user',routes.userRoutes);


export default app;