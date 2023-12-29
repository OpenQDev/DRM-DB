import { TypedEvaluation, TypedTarget } from "./target";
export type UserTargetMetadata = {
    githubRestId: number;
    githubGraphqlId: string;
    login: string;
    name?: string | null;
    avatarUrl: string;
    company?: string | null;
    websiteUrl?: string | null;
    location?: string | null;
    email?: string | null;
    isHireable?: boolean;
    bio?: string | null;
    twitterUsername?: string | null;
    followersCount: number;
    createdAt: string;
    updatedAt: string;
};
export type UserTarget = TypedTarget<UserTargetMetadata>;
export type UserEvaluationParams = {
    since: string;
    until: string;
    id: string;
    login: string;
};
export type UserEvaluationResult = {
    stargazerCount: number;
    followerCount: number;
    commitCount: number;
    insertions: number;
    deletions: number;
    linesChanged: number;
    commitsByWeekDayAndHour: Record<string, {
        commitCount: number;
    }>;
    commitsByDay: Record<string, {
        commitCount: number;
        linesChanged: number;
        insertions: number;
        deletions: number;
    }>;
    commitsByDayNormalized: {
        commitCount: number[];
        linesChanged: number[];
        insertions: number[];
        deletions: number[];
    };
    commitsTrend: number;
    children: {
        nameWithOwner: string;
        stargazerCount: number;
        email: string | null;
        twitterUsername: string | null;
        websiteUrl: string | null;
        avatarUrl: string;
        url: string;
    }[];
    scores: {
        activity: {
            time: number;
            loc: number;
            combined: number;
        };
        reputation: {
            combined: number;
        };
        popularity: {
            combined: number;
        };
        languages: {
            name: string;
            combined: number;
        }[];
    };
};
export type UserEvaluation = TypedEvaluation<UserTarget, UserEvaluationParams, UserEvaluationResult>;
