import { Hono } from "hono";
import pingRouter from "./ping.router";
import hotelRouter from "./hotel.router";

const v1Router = new Hono();

v1Router.route("/ping", pingRouter);

v1Router.route("/hotels", hotelRouter);


export default v1Router;