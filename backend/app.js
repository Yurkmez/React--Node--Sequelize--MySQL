import express from 'express';
import cors from 'cors';
//  !!! __dirname is not defined in ES module scope
import path from 'path'; // so
import { fileURLToPath } from 'url';

// Совместимость CommonJS and ES6
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

import sequelize from './configDB/db.js';

// About path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// __________________

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();
