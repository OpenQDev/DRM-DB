import { TypedEvaluation, TypedTarget } from "./target";
export type RepoTargetMetadata = {
    githubRestId: number;
    githubGraphqlId: string;
    name: string;
    nameWithOwner: string;
    private: boolean;
    ownerLogin: string;
    ownerAvatarUrl: string;
    description?: string;
    fork: boolean;
    homepage?: string;
    size: number;
    stargazersCount: number;
    watchersCount: number;
    language: string;
    hasIssues: boolean;
    hasProjects: boolean;
    hasDiscussions: boolean;
    forksCount: number;
    archived: boolean;
    disabled: boolean;
    openIssuesCount: number;
    license?: string;
    visibility: string;
    defaultBranch: string;
    createdAt: number;
    updatedAt: number;
    pushedAt: number;
};
export type RepoTarget = TypedTarget<RepoTargetMetadata>;
export type RepoEvaluationParams = {
    since: string;
    until: string;
};
export interface RepoEvaluationResult {
    commitCount: number;
    linesChanged: number;
    insertions: number;
    deletions: number;
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
    commitsByAuthor: Record<string, {
        commitCount: number;
        linesChanged: number;
    }>;
    authors: {
        github_rest_id: number;
        github_graphql_id: string;
        login: string;
        name: string;
        email: string;
        avatar_url: string;
        company: string;
        location: string;
        bio: string;
        followers: number;
        following: number;
        created_at: string;
        updated_at: string;
    }[];
    assignableUsers: {
        id: string;
        databaseId: number;
        login: string;
        name: string | null;
        email: string | null;
        avatarUrl: string;
        bio: string | null;
        websiteUrl: string | null;
        twitterUsername: string | null;
        company: string | null;
        isHireable: boolean;
        location: string | null;
        followers: {
            totalCount: number;
        };
        topRepositories: {
            totalCount: number;
            nodes: {
                id: string;
                nameWithOwner: string;
                stargazerCount: number;
                forkCount: number;
                description: string | null;
                url: string;
                defaultBranchRef: {
                    target: {
                        history: {
                            nodes: {
                                commitResourcePath: string;
                                author: {
                                    date: string;
                                    user: {
                                        login: string;
                                    } | null;
                                };
                            }[];
                        };
                    };
                } | null;
            }[];
        } | null;
        createdAt: string;
        updatedAt: string;
    }[];
    scores: {
        activity: {
            time: number;
            loc: number;
            combined: number;
        };
        growth: {
            combined: number;
        };
        popularity: {
            combined: number;
        };
        reputation: {
            combined: number;
        };
        languages: string[];
    };
    [key: string]: unknown;
}
export type RepoEvaluation = TypedEvaluation<RepoTarget, RepoEvaluationParams, RepoEvaluationResult>;
