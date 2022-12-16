function formatSub(sub) {
  if (sub === 're_249_1w') {
    return 'اسبوعي';
  } else if (sub === 're_799_1m') {
    return 'شهري';
  } else if (sub === 're_2199_3m') {
    return '3 شهور';
  } else {
    return sub || 'لا يوجد';
  }
}

export default formatSub;
