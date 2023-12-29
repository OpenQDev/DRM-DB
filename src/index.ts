import * as Prisma from "@prisma/client";
import * as EvalRepo from "./evaluations/repo";
import * as EvalRepoDependencies from "./evaluations/repoDependencies";
import * as EvalUser from "./evaluations/user";
import * as EvalUserDependencies from "./evaluations/userDependencies";

export default new Prisma.PrismaClient();
export type PrismaClient = Prisma.PrismaClient;
export type Account = Prisma.Account;
export type Evaluation = Prisma.Evaluation;
export type User = Prisma.User;
export type Session = Prisma.Session;
export type VerificationToken = Prisma.VerificationToken;
export type OneTimeCodes = Prisma.OneTimeCodes;
export type TeamAccount = Prisma.TeamAccount;
export type Contact = Prisma.Contact;
export type Email = Prisma.Email;
export type EmailThread = Prisma.EmailThread;
export type Note = Prisma.Note;
export type GithubTarget = Prisma.GithubTarget;
export type TargetScout = Prisma.TargetScout;
export type Tracker = Prisma.Tracker;
export type Campaign = Prisma.Campaign;
export type Report = Prisma.Report;
export type GithubRepository = Prisma.GithubRepository;

export type RepoTarget = EvalRepo.RepoTarget;
export type RepoEvaluation = EvalRepo.RepoEvaluation;
export type RepoEvaluationParams = EvalRepo.RepoEvaluationParams;
export type RepoEvaluationResult = EvalRepo.RepoEvaluationResult;

export type UserTarget = EvalUser.UserTarget;
export type UserEvaluation = EvalUser.UserEvaluation;
export type UserEvaluationParams = EvalUser.UserEvaluationParams;
export type UserEvaluationResult = EvalUser.UserEvaluationResult;

export type RepoDependenciesEvaluationResult =
  EvalRepoDependencies.RepoDependenciesEvaluationResult;

export type UserDependenciesEvaluationResult =
  EvalUserDependencies.UserDependenciesEvaluationResult;

export type RepoDependenciesDates = EvalUserDependencies.RepoDependenciesDates;
