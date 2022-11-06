import fs from "fs";

export const convertCsvToJson = async (
  path: string,
  isBook: boolean,
  delimiter = "æ"
) => {
  //leemos archivo
  const fileText = fs.readFileSync(path).toString();
  //separamos filas por espacio
  const allLines = fileText.split("\n");

  //encabezados
  const fieldNames = allLines[0].split(";");
  //resto de la data
  const dataLines = allLines.slice(1);

  const arrayData = [];
  for (let i = 0; i < dataLines.length; i++) {
    let objectData: any = {};

    let lineFormatter;
    if (isBook) {
      lineFormatter = dataLines[i].replace(/";"/g, `"${delimiter}"`);
    } else {
      lineFormatter = dataLines[i].replace(/";/g, `"${delimiter}`);
    }

    const line = lineFormatter.split(delimiter);

    if (line.length > 2) {
      for (let j = 0; j < fieldNames.length; j++) {
        const fieldFormatter = fieldNames[j]
          .replace(/["\r]/g, "")
          .toLocaleLowerCase();

        const field = fieldFormatter.replace(/-/gi, "_");

        if (line[j] === "NULL\r") {
          objectData[field] = null;
        } else if (typeof line[j] === "string") {
          objectData[field] = line[j].replace(/["\r]/g, "");
        } else {
          objectData[field] = line[j];
        }
      }
      arrayData.push(objectData);
    }
  }

  /*('"1584855282";"The Feelings Book: The Care &amp; Keeping of Your Emotions (American Girl (Paperback Unnumbered))";"Norm Bendell";"2002";"Pleasant Company Publications";');*/

  return arrayData;
};
