import { GithubTarget, Evaluation } from "@prisma/client";

export type TypedTarget<TMetadata> = GithubTarget & {
  metadata: TMetadata;
};

export type TypedEvaluation<TTarget, TParams, TResult> = Evaluation & {
  target: TTarget;
  params?: TParams;
  result?: TResult;
};
