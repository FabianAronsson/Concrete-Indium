import * as express from "express";

export default interface authenticationRoute {
    userRoute(): express.Router;
}