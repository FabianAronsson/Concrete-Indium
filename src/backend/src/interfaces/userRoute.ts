import * as express from "express";

export default interface UserRoute {
    userRoute(): express.Router;
}