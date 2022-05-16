import Port from "./DTO/Port";
import { Protocol } from "./DTO/Protocol";

export default class DockerConnection {
  private _socket: string;
  private _host: string;
  private _protocol: Protocol;
  private _port: Port;

  constructor() {
    this._socket = "/var/run/docker.sock";
    this._host = "";
    this._protocol = Protocol.SSH;
    this._port = new Port(22);
  }

  public get socket(): string {
    return this._socket;
  }
  public get host(): string {
    return this._host;
  }
  public get protocol(): Protocol {
    return this._protocol;
  }
  public get port(): Port {
    return this._port;
  }
}
