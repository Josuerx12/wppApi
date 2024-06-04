import { wppInstance } from "../../config/wpp-instance";

export class AutoResponse {
  execute() {
    wppInstance.on("message", (msg) => {
      if (
        msg.body.toLowerCase().includes("app") ||
        msg.body.toLowerCase().includes("aplicativo")
      ) {
        msg.reply(
          "*Para Utilizar nosso aplicativo*\n\nBaixe direto pelo link abaixo:\nhttps://expo.dev/artifacts/eas/nn5YzBRxNXF3y1Lfbgmvdn.apk\n\nAplicativo em período de testes, e disponivel apenas para android!"
        );
      }

      if (
        msg.body.toLowerCase().includes("solicitar") ||
        msg.body.toLowerCase().includes("site") ||
        msg.body.toLowerCase().includes("pagina") ||
        msg.body.toLowerCase().includes("ajuda")
      ) {
        msg.reply(
          "*Separa +  *Auto Atendimento**\n\nPara acompanhar, solicitar ou verificar o status de sua solicitação acesse o site ou baixo nosso app:\n\n*Site*:https://separamais.josuecarvalho.cloud\n\n*Baixe o app do Separa +*\n\nBaixe aqui:https://expo.dev/artifacts/eas/nn5YzBRxNXF3y1Lfbgmvdn.apk\n\nAté o momento disponivel apenas para android, em fase de testes!"
        );
      }
    });
  }
}
