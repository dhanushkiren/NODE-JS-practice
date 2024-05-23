import express from 'express';
import helmet from 'helmet';
import mainRoutes from './main.routes.js';
import userRoutes from './user.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());
app.use('/v1',mainRoutes);
app.use('/v1/user',userRoutes);


app.listen(port,()=>{
    console.log(`listening on port: http://localhost:${port}`);
})