export type DependencyCommitSummary = {
    commit_hash: string;
    author: string;
    date: string;
    message: string;
    added_lines: number;
    removed_lines: number;
    full_content: string;
};
export type RepoDependenciesDates = {
    [depFileName: string]: {
        commits_summary: DependencyCommitSummary[];
        dates_added: string[];
        dates_removed: string[];
        earliestFound: string | null;
        dateRemoved: string | null;
        repoStatus: string;
        userStatus?: string;
        userRank?: string;
    };
};
export type Ranks = "inactive" | "one-time" | "part-time" | "full-time";
export type Statuses = "cold" | "churned" | "customer" | "customer churned" | "customer inactive" | "lead" | "lead inactive" | "lead churned" | "inactive" | "one-time";
export type UserStatusPerDependency = {
    [depFileName: string]: Statuses | Ranks;
};
export type UserRepoSummary = {
    [repoName: string]: {
        dependenciesActiveDates: RepoDependenciesDates;
        userFirstRepoCommitDate: string;
        userCommitsLast6Weeks: number;
        repoCommitsLast6Weeks: number;
        userCommitsSinceCampaignStart: number;
        repoCommitsSinceCampaignStart: number;
    } | null;
};
export type UserDependenciesEvaluationResult = {
    userStatusPerDependency: UserStatusPerDependency;
    userRepoSummary: UserRepoSummary;
};
