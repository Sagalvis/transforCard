import { Router } from "express";
import * as controllerDownload from "../controllers/download.controllers.js" 
const downloadRoutes = Router();

downloadRoutes.get('/downdloadcustomer', controllerDownload.DownloadCustomer );


export default downloadRoutes