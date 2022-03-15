import { Connection, IDatabaseDriver, EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";

interface ExtendedRequest extends Request {
  session: Session &
    Partial<SessionData> &
    Express.Request & { userId: number };
}

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: ExtendedRequest;
  res: Response;
};
