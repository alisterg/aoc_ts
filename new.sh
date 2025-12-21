#!/bin/bash

# Validate arguments
if [ $# -lt 2 ]; then
  echo "Usage: $0 <year> <day>"
  echo "Example: $0 24 1  →  2024/01.ts"
  exit 1
fi

# Process year - prepend '20' if 2 digits
year="$1"
if [ ${#year} -eq 2 ]; then
  year="20$year"
fi

# Process day - prepend '0' if single digit
day="$2"
if [ ${#day} -eq 1 ]; then
  day="0$day"
fi

# Create year directory if it doesn't exist
mkdir -p "$year"

# Copy templates with substitution
sed "s/{{DAY}}/$day/g" ./template/TEMPLATE > "./$year/$day.ts"
sed "s/{{DAY}}/$day/g" ./template/TEST_TEMPLATE > "./$year/$day.test.ts"

echo "Created $year/$day.ts and $year/$day.test.ts"

