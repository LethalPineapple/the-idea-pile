import express from "express";
import { ObjectId } from "mongodb";

export function createWhiteboardRouter(db) {
  const router = express.Router();
  const whiteboards = db.collection("whiteboards");



}