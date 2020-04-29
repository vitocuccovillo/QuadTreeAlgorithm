# QuadTree Algorithm

QuadTree is a tree data structure where each non-leaf node has exactly four children. Each leaf node has a maximum capacity and when it is reached the bucket spills. In this way a nested tree that could be filled is obtained. This data structure is adopted to recursively partition a two-dimensional space into sub-regions. 

This QuadTree implementation is based on the one into the following GitHub repo: https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_098.1_QuadTree/P5

The original implementation of this algorithm didn't subdivide a partition when the maximum capacity was reached, but in this version this behaviour has been fixed.
