const utils = {
  formatData: (data) => {
    const newData = [['From', 'To', 'Value']];
    data.map((dataVal) => {
      newData.push(
        [dataVal['from'] || '', dataVal['to'] || '', dataVal['value']] || 0
      );
    });
    return newData;
  },
};

export default utils;
