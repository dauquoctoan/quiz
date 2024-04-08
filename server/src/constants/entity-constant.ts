/** 
* ! GROUP 
* * backlog : backlog
* * unstarted : unstarted
* * started : started
* * completed : completed
* * cancelled : cancelled
*/

export const GROUP = ['backlog', 'unstarted', 'started', 'completed', 'cancelled']

/** 
* ! ROLE 
* * 20 : Owner
* * 15 : Admin
* * 10 : Member
* * 5 : Guest
*/

export const ROLE = [5, 10, 15, 20];

/** 
* ! ACCESS
* * 0 : Private
* * 1 : Public
*/

export const ACCESS = [0, 1];

/** 
* ! NETWORK
* * 0 : Seccret
* * 1 : Public
*/

export const NETWORK = ['0', '1'];

/** 
* ! MEDIUM
* * Google : google
* * Github : github
*/

export const MEDIUM = ['Google', 'Github'];

/** 
* ! USER_TYPE
* * 0 : Human
* * 1 : Bot
*/

export const USER_TYPE = [0, 1];

/**
* ! PROVIDE
* json: JSON
* csv: CSV
* xlsx: XLSX
*/

export const PROVIDE = ['json', 'csv', 'xlsx'];


/**
* ! STATUS
* queued: queued
* processing: processing
* completed: completed
* failed: failed
*/

export const STATUS = ['queued', 'processing', 'completed', 'failed'];

/**
* ! SERVICE
* github: Github
* jira: Jira
*/

export const SERVICE = ['github', 'jira'];

/**
* ! ISSUE_STATUS
* -2: Pending
* -1: Rejected
* 0: Snoozed
* 1: Accepted
* 2: Duplicate
*/

export const ISSUE_STATUS = [-2, -1, 0, 1, 2];

/**
* ! PRIORITY
* urgent: Urgent
* high: High
* medium: Medium
* low: Low
* none: None
*/

export const PRIORITY = ["urgent", "high", "medium", "low", "none"]

/**
* ! RELATION
* duplicate: Duplicate
* relates_to: Relates To
* blocked_by: Blocked By
*/

export const RELATION = ["duplicate", "relates_to", "blocked_by"]


/**
* ! VOTE
* -1: DOWNVOTE
* 1: UPVOTE
*/

export const VOTE = [-1, 1];

/**
* ! ISSUE_ACCESS
* INTERNAL: INTERNAL
* EXTERNAL: EXTERNAL
*/

export const ISSUE_ACCESS = ['INTERNAL', 'EXTERNAL'];

/**
* ! MODULE_STATUS
* backlog: Backlog
* planned: Planned
* in-progress: In-progress
* paused: Paused
* completed: Completed
* cancelled: Cancelled
*/

export const MODULE_STATUS = ["backlog", "planned", "in-progress", "paused", "completed", "cancelled"];


export const SORT_ORDER = 65535;


export const DEFAULT_ONBOARDING = {
    "profile_complete": '0',
    "workspace_create": '0',
    "workspace_invite": '0',
    "workspace_join": '0',
}

export const DEFAULT_PREFERENCES = {
    "pages": { "block_display": true }
}

export const DEFAULT_PROPS = {
    "filters": {
        "priority": null,
        "state": null,
        "state_group": null,
        "assignees": null,
        "created_by": null,
        "labels": null,
        "start_date": null,
        "target_date": null,
        "subscriber": null,
    },
    "display_filters": {
        "group_by": null,
        "order_by": '-created_at',
        "type": null,
        "sub_issue": true,
        "show_empty_groups": true,
        "layout": "list",
        "calendar_date_range": "",
    },
    "display_properties": {
        "assignee": true,
        "attachment_count": true,
        "created_on": true,
        "due_date": true,
        "estimate": true,
        "key": true,
        "labels": true,
        "link": true,
        "priority": true,
        "start_date": true,
        "state": true,
        "sub_issue_count": true,
        "updated_on": true,
    }
}

export const DEFAULT_VIEWS = {
    "list": true,
    "kanban": true,
    "calendar": true,
    "gantt": true,
    "spreadsheet": true,
}