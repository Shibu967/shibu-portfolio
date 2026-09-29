import type { DSATopic } from '../types'

// -------------------------------------------------------
// DSA Journey data — 60-Day PHP DSA Challenge.
//
// To update progress:
//   1. Change the current item's status from 'current' to 'completed'
//   2. Set the next item's status from 'upcoming' to 'current'
//   3. Update problemsSolved count if applicable
//
// The UI reads this data — no component changes needed.
// Source: DSA-60-Day-Challenge folder structure + resume
// (Resume confirms: Data Structures, Algorithms, Problem
//  Solving, Time & Space Complexity as active skills)
// -------------------------------------------------------

export const dsaTopics: DSATopic[] = [
  { day: 1,  topic: 'Algorithm Complexity – Big O Notation',       status: 'completed', problemsSolved: 5 },
  { day: 2,  topic: 'Algorithm Complexity – Practice',             status: 'completed', problemsSolved: 4 },
  { day: 3,  topic: 'Space Complexity',                            status: 'completed', problemsSolved: 4 },
  { day: 4,  topic: 'PHP Built-in Complexity Analysis',            status: 'completed', problemsSolved: 4 },
  { day: 5,  topic: 'Complexity Patterns',                         status: 'completed', problemsSolved: 7 },
  { day: 6,  topic: 'Complexity Practice',                         status: 'completed', problemsSolved: 5 },
  { day: 7,  topic: 'Revision Phase 1 – Complexity Review',        status: 'completed', problemsSolved: 3 },
  { day: 8,  topic: 'Arrays Fundamentals',                         status: 'completed', problemsSolved: 9 },
  { day: 9,  topic: 'Arrays – Two Pointer Pattern',                status: 'completed', problemsSolved: 4 },
  { day: 10, topic: 'Arrays – Prefix Sum Pattern',                 status: 'current',   problemsSolved: 3 },
  { day: 11, topic: 'Arrays – Sliding Window',                     status: 'upcoming' },
  { day: 12, topic: 'Arrays – Subarray Problems',                  status: 'upcoming' },
  { day: 13, topic: 'Strings – Basics & Manipulation',             status: 'upcoming' },
  { day: 14, topic: 'Strings – Pattern Matching',                  status: 'upcoming' },
  { day: 15, topic: 'Strings – Anagram & Frequency Map',           status: 'upcoming' },
  { day: 16, topic: 'Hashing – HashMap Fundamentals',              status: 'upcoming' },
  { day: 17, topic: 'Revision Phase 2 – Arrays & Strings',         status: 'upcoming' },
  { day: 18, topic: 'Linked Lists – Basics',                       status: 'upcoming' },
  { day: 19, topic: 'Linked Lists – Fast & Slow Pointer',          status: 'upcoming' },
  { day: 20, topic: 'Linked Lists – Reversal Techniques',          status: 'upcoming' },
  { day: 21, topic: 'Stacks – Basics & Monotonic Stack',           status: 'upcoming' },
  { day: 22, topic: 'Queues – Basics & Deque',                     status: 'upcoming' },
  { day: 23, topic: 'Revision Phase 3 – Linked Lists & Stacks',    status: 'upcoming' },
  { day: 24, topic: 'Trees – Binary Tree Traversals',              status: 'upcoming' },
  { day: 25, topic: 'Trees – BST Operations',                      status: 'upcoming' },
  { day: 26, topic: 'Trees – BFS (Level Order)',                   status: 'upcoming' },
  { day: 27, topic: 'Trees – DFS Patterns',                        status: 'upcoming' },
  { day: 28, topic: 'Graphs – Basics & Representation',            status: 'upcoming' },
  { day: 29, topic: 'Graphs – BFS & DFS',                          status: 'upcoming' },
  { day: 30, topic: 'Revision Phase 4 – Trees & Graphs',           status: 'upcoming' },
  { day: 31, topic: 'Dynamic Programming – Intro & Memoization',   status: 'upcoming' },
  { day: 32, topic: 'Dynamic Programming – Knapsack Patterns',     status: 'upcoming' },
  { day: 33, topic: 'Dynamic Programming – Longest Subsequence',   status: 'upcoming' },
  { day: 34, topic: 'Sorting – Merge Sort & Quick Sort',           status: 'upcoming' },
  { day: 35, topic: 'Binary Search – Advanced Patterns',           status: 'upcoming' },
  { day: 36, topic: 'Greedy – Interval Problems',                  status: 'upcoming' },
  { day: 37, topic: 'Backtracking – Permutations & Subsets',       status: 'upcoming' },
  { day: 38, topic: 'Revision Phase 5 – DP & Advanced Topics',     status: 'upcoming' },
  { day: 39, topic: 'Heaps – Min/Max Heap Patterns',               status: 'upcoming' },
  { day: 40, topic: 'Tries – Prefix Tree',                         status: 'upcoming' },
  { day: 41, topic: 'Bit Manipulation – Basics',                   status: 'upcoming' },
  { day: 42, topic: 'Two Pointers – Advanced',                     status: 'upcoming' },
  { day: 43, topic: 'Intervals – Merge & Insert',                  status: 'upcoming' },
  { day: 44, topic: 'Math – GCD, Prime, Modular',                  status: 'upcoming' },
  { day: 45, topic: 'Revision Phase 6 – Mixed Topics',             status: 'upcoming' },
  { day: 46, topic: 'Mock Interview – Arrays & Strings',           status: 'upcoming' },
  { day: 47, topic: 'Mock Interview – Linked Lists & Trees',       status: 'upcoming' },
  { day: 48, topic: 'Mock Interview – Graphs & DP',                status: 'upcoming' },
  { day: 49, topic: 'Mock Interview – Mixed Problems',             status: 'upcoming' },
  { day: 50, topic: 'Revision Phase 7 – Full Review',              status: 'upcoming' },
  { day: 51, topic: 'LeetCode Easy – Batch 1',                     status: 'upcoming' },
  { day: 52, topic: 'LeetCode Easy – Batch 2',                     status: 'upcoming' },
  { day: 53, topic: 'LeetCode Medium – Batch 1',                   status: 'upcoming' },
  { day: 54, topic: 'LeetCode Medium – Batch 2',                   status: 'upcoming' },
  { day: 55, topic: 'LeetCode Medium – Batch 3',                   status: 'upcoming' },
  { day: 56, topic: 'LeetCode Hard – Intro',                       status: 'upcoming' },
  { day: 57, topic: 'Revision Phase 8 – LeetCode Review',          status: 'upcoming' },
  { day: 58, topic: 'System Design – Basics',                      status: 'upcoming' },
  { day: 59, topic: 'System Design – Practice',                    status: 'upcoming' },
  { day: 60, topic: 'Final Review & Mock Interview',               status: 'upcoming' },
]

// -------------------------------------------------------
// Derived summary — computed from dsaTopics.
// Components use this instead of calculating inline.
// -------------------------------------------------------

export function getDSASummary() {
  const completed = dsaTopics.filter((t) => t.status === 'completed')
  const current = dsaTopics.find((t) => t.status === 'current')
  const upcoming = dsaTopics.filter((t) => t.status === 'upcoming')
  const totalProblems = dsaTopics.reduce((sum, t) => sum + (t.problemsSolved ?? 0), 0)
  const progressPercent = Math.round((completed.length / dsaTopics.length) * 100)

  return {
    totalDays: dsaTopics.length,
    completedDays: completed.length,
    currentTopic: current ?? null,
    upcomingTopics: upcoming,
    totalProblemsSolved: totalProblems,
    progressPercent,
  }
}
