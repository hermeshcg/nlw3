import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;

/* {
	"name": "Lar das meninas",
	"latitude": -20.5315577,
	"longitude":  -47.3804479,
	"about": "Sobre o orfanato",
	"instructions" : "venha visitar",
	"opening_hours": "Das 8h ate as 18h",
	"open_on_weekends": true
} */
