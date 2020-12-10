import * as express from "express";

export default interface chatRoute {
    chatRoute(): express.Router;
}