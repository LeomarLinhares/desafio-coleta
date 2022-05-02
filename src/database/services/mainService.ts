import countHandler from '../../helpers/countHandler';
import { IAnswer, IAnswerResponse, IAnswerWithCount } from '../../interfaces/IAnswer';
import IMessage from '../../interfaces/IMessage';
import MainModel from '../models/mainModel';

class MainService {
  public async create (answer: IAnswer): Promise<IAnswerResponse | IMessage> {
    try {
      const answerWithCount: IAnswerWithCount = countHandler(answer);
      const allAnswersBuffer: Buffer = await MainModel.read();
      const allAnswers: IAnswerResponse[] = JSON.parse(allAnswersBuffer.toString());
      const responseBuffer = await MainModel.create(JSON.stringify([...allAnswers, {
        ...answerWithCount,
        id: allAnswers.length + 1,
      }]));
      
      const response = JSON.parse(responseBuffer.toString());

      return response[response.length - 1];

    } catch (error) {
      console.warn(error);
      return { message: 'Erro ao acessar arquivo de dados' }
    }
  }
}

export default new MainService();
