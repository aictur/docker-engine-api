import Docker from "./Docker";
import DockerConnection from "./DockerConnection";

export const DockerModem = require("docker-modem");

export default Docker;

const con = new DockerConnection();
const DockerInstance = new Docker(con);
DockerInstance.ps().then(console.log).catch(console.log);
