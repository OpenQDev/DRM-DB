export type DependencyCommitSummary = {
  commit_hash: string;
  author: string;
  date: string;
  message: string;
  added_lines: number;
  removed_lines: number;
  full_content: string;
};

export type RepoDependenciesEvaluationResult = {
  dependenciesActiveDates: {
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
  repoCommitsLast6Weeks: number;
  repoCommitsSinceCampaignStart: number;
};
