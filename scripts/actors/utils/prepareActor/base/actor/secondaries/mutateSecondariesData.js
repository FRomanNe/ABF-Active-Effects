const mutateSecondariesData = (data) => {
  const { secondaries } = data;
  for (const rawSecondaryKey of Object.keys(secondaries)) {
    const secondaryKey = rawSecondaryKey;
    if (secondaryKey === "secondarySpecialSkills") continue;
    for (const key of Object.keys(secondaries[secondaryKey])) {
      const secondary = data.secondaries[secondaryKey][key];
      secondary.mod = {value: 0};
    }
  }
};
export {
  mutateSecondariesData
};
