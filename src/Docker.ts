import DockerModem from "docker-modem";

import DockerConnection from "./DockerConnection";

export default class Docker {
  readonly connection: DockerConnection;
  readonly modem: DockerModem;

  constructor(connection: DockerConnection) {
    this.connection = connection;
    this.modem = new DockerModem({
      socketPath: connection.socket,
    });
  }

  async ps(): Promise {
    const optsf = {
      path: "/containers/json?",
      method: "GET",
      statusCodes: {
        200: true,
        400: "bad parameter",
        500: "server error",
      },
    };
    return new Promise((resolve, reject) => {
      this.modem.dial(optsf, function (err: any, data: any) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
