import web3 from "./web3";
import compiledAdmin from './build/Admin.json';


const instance =  new web3.eth.Contract(
    JSON.parse(compiledAdmin.interface) ,
    '0x99613E532917C6bE15D35001C5D3fCfFA7108A37'
);

export default instance;