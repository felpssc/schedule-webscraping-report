interface formattedScrapingResult {
  rank: string,
  change: string,
  language: string,
  share: string,
  trend: string,
}

const verifyChange = (change: string): string => {
  if(change.length === 0) {
    return ""
  } else if(change.includes('Up')) {
    return "▲";
  } else {
    return "▼";
  }
}

const formatScrapingResult = (scrapingResult: string[][]): formattedScrapingResult[] => {
  return scrapingResult.map(([rank, change, language, share, trend]) => {
    return {
      rank,
      change: verifyChange(change),
      language,
      share,
      trend,
    }
  })
};

export { formatScrapingResult };