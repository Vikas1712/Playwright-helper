/**
 * timeouts.ts: This module provides Timeout constants that can be used to override various actions, conditional statements and assertions.
 * Instead of hard coding the timeout when overriding any utility functions, use these Timeout constants.
 */
export const
    /**
     * Timeout constant for instant actions/assertions, set to 2000 milliseconds (2 second).
     */
    INSTANT_TIMEOUT = 2000,
    /**
     * Timeout constant for small actions/assertions, set to 10000 milliseconds (10 seconds).
     */
    SMALL_TIMEOUT = 10 * 1000,
    /**
     * Standard timeout constant, set to 20000 milliseconds (20 seconds).
     */
    STANDARD_TIMEOUT = 20 * 1000,
    /**
     * Timeout constant for bigger actions/assertions, set to 30000 milliseconds (30 seconds).
     */
    BIG_TIMEOUT = 30 * 1000,
    /**
     * Maximum timeout constant, set to 60000 milliseconds (1 minute).
     */
    MAX_TIMEOUT = 60 * 1000,
    /**
     * Timeout constant for Playwright's expect function, set to 30000 milliseconds (30 seconds).
     */
    EXPECT_TIMEOUT = 30 * 1000,
    /**
     * Timeout constant for Playwright's action functions, set to 30000 milliseconds (30 seconds).
     */
    ACTION_TIMEOUT = 30 * 1000,
    /**
     * Timeout constant for Playwright's navigation functions, set to 30000 milliseconds (60 seconds).
     */
    NAVIGATION_TIMEOUT = 60 * 1000,
    /**
     * Timeout constant for Playwright's test functions, set to 120000 milliseconds (2 minutes).
     */
    TEST_TIMEOUT = 2 * 60 * 1000;








