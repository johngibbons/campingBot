#!/bin/bash

jq 'map(del(._id) | del(.__v) | del(.updatedAt) | del(.createdAt))' campgrounds.json > tmp.$$.json && mv tmp.$$.json campgrounds.json
