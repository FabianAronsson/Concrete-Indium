import * as express from "express";

export default interface authenticationRoute {
    authenticationRoute(): express.Router;
}