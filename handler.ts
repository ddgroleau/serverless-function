import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Your example API key is ${process.env.SAMPLE_API_KEY}.`,
        input: event,
      },
      null,
      2
    ),
  };
};
