var whoTemplate = {
  templates: [
    {
      name: "Module 1 Template",
      file: "NHWA_Module_1.xlsx",
      sheets: [
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 1,
          sheet_name: "Demographic sheet",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "V2",
          year_cell: "Q4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "h6VJJu0W8U7",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D8",
              total: true,
              name: "Medical Doctors Stock Total default"
            },
            {
              deuid: "MdkO4mttohH",
              cocuid: "drJDZnHzeBH",
              cell_no: "E8",
              total: true,
              name: "Medical Doctors Stock By Activity Level Practising"
            },
            {
              deuid: "MdkO4mttohH",
              cocuid: "VPShWMVpQkb",
              cell_no: "F8",
              total: true,
              name:
                "Medical Doctors Stock By Activity Level Professionally active"
            },
            {
              deuid: "MdkO4mttohH",
              cocuid: "xcotqxKxwlL",
              cell_no: "G8",
              total: true,
              name:
                "Medical Doctors Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "GFfMM55sVzg",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H8",
              total: true,
              name: "Medical Doctors Stock By Sex Male"
            },
            {
              deuid: "GFfMM55sVzg",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I8",
              total: true,
              name: "Medical Doctors Stock By Sex Female"
            },
            {
              deuid: "v2CCdaKGum8",
              cocuid: "StFfGxHbuDF",
              cell_no: "J8",
              total: true,
              name: "Medical Doctors Stock By Age Group < 25 yrs"
            },
            {
              deuid: "v2CCdaKGum8",
              cocuid: "unqbIiA0uir",
              cell_no: "K8",
              total: true,
              name: "Medical Doctors Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "v2CCdaKGum8",
              cocuid: "cMLHJtYTW40",
              cell_no: "L8",
              total: true,
              name: "Medical Doctors Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "v2CCdaKGum8",
              cocuid: "VioJV8V3lMO",
              cell_no: "M8",
              total: true,
              name: "Medical Doctors Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "v2CCdaKGum8",
              cocuid: "MYvkD09xyeq",
              cell_no: "N8",
              total: true,
              name: "Medical Doctors Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "v2CCdaKGum8",
              cocuid: "xIJxneZjiWm",
              cell_no: "O8",
              total: true,
              name: "Medical Doctors Stock By Age Group > 65 yrs"
            },
            {
              deuid: "ifKISqV6PJh",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P8",
              total: true,
              name: "Medical Doctors Stock By Place of Birth National Born"
            },
            {
              deuid: "ifKISqV6PJh",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q8",
              total: true,
              name: "Medical Doctors Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "P7NeDYkZMDT",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R8",
              total: true,
              name: "Medical Doctors Stock By Place of Training Domestic"
            },
            {
              deuid: "P7NeDYkZMDT",
              cocuid: "GSHgapGzSnl",
              cell_no: "S8",
              total: true,
              name: "Medical Doctors Stock By Place of Training Foreign"
            },
            {
              deuid: "P7NeDYkZMDT",
              cocuid: "Ot71GbygcHf",
              cell_no: "T8",
              total: true,
              name: "Medical Doctors Stock By Place of Training Unknown"
            },
            {
              deuid: "Yxkvq7nmosQ",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D9",
              total: false,
              name: "General Medical Practitioners Stock Total default"
            },
            {
              deuid: "dFWlhArOcXj",
              cocuid: "drJDZnHzeBH",
              cell_no: "E9",
              total: false,
              name:
                "General Medical Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "dFWlhArOcXj",
              cocuid: "VPShWMVpQkb",
              cell_no: "F9",
              total: false,
              name:
                "General Medical Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "dFWlhArOcXj",
              cocuid: "xcotqxKxwlL",
              cell_no: "G9",
              total: false,
              name:
                "General Medical Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "vCOrIolhyxP",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H9",
              total: false,
              name: "General Medical Practitioners Stock By Sex Male"
            },
            {
              deuid: "vCOrIolhyxP",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I9",
              total: false,
              name: "General Medical Practitioners Stock By Sex Female"
            },
            {
              deuid: "I5EztFwNzC0",
              cocuid: "StFfGxHbuDF",
              cell_no: "J9",
              total: false,
              name: "General Medical Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "I5EztFwNzC0",
              cocuid: "unqbIiA0uir",
              cell_no: "K9",
              total: false,
              name: "General Medical Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "I5EztFwNzC0",
              cocuid: "cMLHJtYTW40",
              cell_no: "L9",
              total: false,
              name: "General Medical Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "I5EztFwNzC0",
              cocuid: "VioJV8V3lMO",
              cell_no: "M9",
              total: false,
              name: "General Medical Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "I5EztFwNzC0",
              cocuid: "MYvkD09xyeq",
              cell_no: "N9",
              total: false,
              name: "General Medical Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "I5EztFwNzC0",
              cocuid: "xIJxneZjiWm",
              cell_no: "O9",
              total: false,
              name: "General Medical Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "tjT8FgtoZmV",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P9",
              total: false,
              name:
                "General Medical Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "tjT8FgtoZmV",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q9",
              total: false,
              name:
                "General Medical Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "pS9QqWeC7OO",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R9",
              total: false,
              name:
                "General Medical Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "pS9QqWeC7OO",
              cocuid: "GSHgapGzSnl",
              cell_no: "S9",
              total: false,
              name:
                "General Medical Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "pS9QqWeC7OO",
              cocuid: "Ot71GbygcHf",
              cell_no: "T9",
              total: false,
              name:
                "General Medical Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "Ta8ifRxwOmP",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D10",
              total: false,
              name: "Specialist Medical Practitioners Stock Total default"
            },
            {
              deuid: "rjQiZlCjHp6",
              cocuid: "drJDZnHzeBH",
              cell_no: "E10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "rjQiZlCjHp6",
              cocuid: "VPShWMVpQkb",
              cell_no: "F10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "rjQiZlCjHp6",
              cocuid: "xcotqxKxwlL",
              cell_no: "G10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "dxbj7q8MNNf",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H10",
              total: false,
              name: "Specialist Medical Practitioners Stock By Sex Male"
            },
            {
              deuid: "dxbj7q8MNNf",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I10",
              total: false,
              name: "Specialist Medical Practitioners Stock By Sex Female"
            },
            {
              deuid: "puzqoVkC9bH",
              cocuid: "StFfGxHbuDF",
              cell_no: "J10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "puzqoVkC9bH",
              cocuid: "unqbIiA0uir",
              cell_no: "K10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "puzqoVkC9bH",
              cocuid: "cMLHJtYTW40",
              cell_no: "L10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "puzqoVkC9bH",
              cocuid: "VioJV8V3lMO",
              cell_no: "M10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "puzqoVkC9bH",
              cocuid: "MYvkD09xyeq",
              cell_no: "N10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "puzqoVkC9bH",
              cocuid: "xIJxneZjiWm",
              cell_no: "O10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "eWlZ0JPdgiX",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "eWlZ0JPdgiX",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "cTz9crtzdvU",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "cTz9crtzdvU",
              cocuid: "GSHgapGzSnl",
              cell_no: "S10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "cTz9crtzdvU",
              cocuid: "Ot71GbygcHf",
              cell_no: "T10",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "mzBQp5cOihy",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D11",
              total: false,
              name: "General Paediatricians Practitioners Stock Total default"
            },
            {
              deuid: "WzTFiecwTNZ",
              cocuid: "drJDZnHzeBH",
              cell_no: "E11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "WzTFiecwTNZ",
              cocuid: "VPShWMVpQkb",
              cell_no: "F11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "WzTFiecwTNZ",
              cocuid: "xcotqxKxwlL",
              cell_no: "G11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "rhltpqitzC9",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H11",
              total: false,
              name: "General Paediatricians Practitioners Stock By Sex Male"
            },
            {
              deuid: "rhltpqitzC9",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I11",
              total: false,
              name: "General Paediatricians Practitioners Stock By Sex Female"
            },
            {
              deuid: "e9thFQZbFg5",
              cocuid: "StFfGxHbuDF",
              cell_no: "J11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "e9thFQZbFg5",
              cocuid: "unqbIiA0uir",
              cell_no: "K11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "e9thFQZbFg5",
              cocuid: "cMLHJtYTW40",
              cell_no: "L11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "e9thFQZbFg5",
              cocuid: "VioJV8V3lMO",
              cell_no: "M11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "e9thFQZbFg5",
              cocuid: "MYvkD09xyeq",
              cell_no: "N11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "e9thFQZbFg5",
              cocuid: "xIJxneZjiWm",
              cell_no: "O11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "DqCmuPyyEKP",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "DqCmuPyyEKP",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "aurZ2kUa2St",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "aurZ2kUa2St",
              cocuid: "GSHgapGzSnl",
              cell_no: "S11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "aurZ2kUa2St",
              cocuid: "Ot71GbygcHf",
              cell_no: "T11",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "cyNh11xykuJ",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock Total default"
            },
            {
              deuid: "ByXuVj0h8L4",
              cocuid: "drJDZnHzeBH",
              cell_no: "E12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "ByXuVj0h8L4",
              cocuid: "VPShWMVpQkb",
              cell_no: "F12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "ByXuVj0h8L4",
              cocuid: "xcotqxKxwlL",
              cell_no: "G12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "y44lwVkMgYI",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Sex Male"
            },
            {
              deuid: "y44lwVkMgYI",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Sex Female"
            },
            {
              deuid: "FZmk1UVPIqJ",
              cocuid: "StFfGxHbuDF",
              cell_no: "J12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "FZmk1UVPIqJ",
              cocuid: "unqbIiA0uir",
              cell_no: "K12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "FZmk1UVPIqJ",
              cocuid: "cMLHJtYTW40",
              cell_no: "L12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "FZmk1UVPIqJ",
              cocuid: "VioJV8V3lMO",
              cell_no: "M12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "FZmk1UVPIqJ",
              cocuid: "MYvkD09xyeq",
              cell_no: "N12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "FZmk1UVPIqJ",
              cocuid: "xIJxneZjiWm",
              cell_no: "O12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "QayMME14lE1",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "QayMME14lE1",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "HdK1N3rPeZ1",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "HdK1N3rPeZ1",
              cocuid: "GSHgapGzSnl",
              cell_no: "S12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "HdK1N3rPeZ1",
              cocuid: "Ot71GbygcHf",
              cell_no: "T12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "QxPGLy2DUhG",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D13",
              total: false,
              name: "Psychiatrists Practitioners Stock Total default"
            },
            {
              deuid: "JQkVqnP5kCq",
              cocuid: "drJDZnHzeBH",
              cell_no: "E13",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "JQkVqnP5kCq",
              cocuid: "VPShWMVpQkb",
              cell_no: "F13",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "JQkVqnP5kCq",
              cocuid: "xcotqxKxwlL",
              cell_no: "G13",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "eXmcYNVuuUY",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H13",
              total: false,
              name: "Psychiatrists Practitioners Stock By Sex Male"
            },
            {
              deuid: "eXmcYNVuuUY",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I13",
              total: false,
              name: "Psychiatrists Practitioners Stock By Sex Female"
            },
            {
              deuid: "v6OkaCDmX5Y",
              cocuid: "StFfGxHbuDF",
              cell_no: "J13",
              total: false,
              name: "Psychiatrists Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "v6OkaCDmX5Y",
              cocuid: "unqbIiA0uir",
              cell_no: "K13",
              total: false,
              name: "Psychiatrists Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "v6OkaCDmX5Y",
              cocuid: "cMLHJtYTW40",
              cell_no: "L13",
              total: false,
              name: "Psychiatrists Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "v6OkaCDmX5Y",
              cocuid: "VioJV8V3lMO",
              cell_no: "M13",
              total: false,
              name: "Psychiatrists Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "v6OkaCDmX5Y",
              cocuid: "MYvkD09xyeq",
              cell_no: "N13",
              total: false,
              name: "Psychiatrists Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "v6OkaCDmX5Y",
              cocuid: "xIJxneZjiWm",
              cell_no: "O13",
              total: false,
              name: "Psychiatrists Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "a5ii3ZTvZJl",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P13",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "a5ii3ZTvZJl",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q13",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "klKaUMVsHxb",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R13",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "klKaUMVsHxb",
              cocuid: "GSHgapGzSnl",
              cell_no: "S13",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "klKaUMVsHxb",
              cocuid: "Ot71GbygcHf",
              cell_no: "T13",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "nNmvfTuUhng",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock Total default"
            },
            {
              deuid: "OYoY16njQBO",
              cocuid: "drJDZnHzeBH",
              cell_no: "E14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "OYoY16njQBO",
              cocuid: "VPShWMVpQkb",
              cell_no: "F14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "OYoY16njQBO",
              cocuid: "xcotqxKxwlL",
              cell_no: "G14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "olAQlCURSQR",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Sex Male"
            },
            {
              deuid: "olAQlCURSQR",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Sex Female"
            },
            {
              deuid: "QPtnjdoIqnH",
              cocuid: "StFfGxHbuDF",
              cell_no: "J14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "QPtnjdoIqnH",
              cocuid: "unqbIiA0uir",
              cell_no: "K14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "QPtnjdoIqnH",
              cocuid: "cMLHJtYTW40",
              cell_no: "L14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "QPtnjdoIqnH",
              cocuid: "VioJV8V3lMO",
              cell_no: "M14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "QPtnjdoIqnH",
              cocuid: "MYvkD09xyeq",
              cell_no: "N14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "QPtnjdoIqnH",
              cocuid: "xIJxneZjiWm",
              cell_no: "O14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "ByA5wj8IJyQ",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "ByA5wj8IJyQ",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "oDP0YtPBOVQ",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "oDP0YtPBOVQ",
              cocuid: "GSHgapGzSnl",
              cell_no: "S14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "oDP0YtPBOVQ",
              cocuid: "Ot71GbygcHf",
              cell_no: "T14",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "VDeI2btrNih",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock Total default"
            },
            {
              deuid: "tyyxKXZbYjI",
              cocuid: "drJDZnHzeBH",
              cell_no: "E15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "tyyxKXZbYjI",
              cocuid: "VPShWMVpQkb",
              cell_no: "F15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "tyyxKXZbYjI",
              cocuid: "xcotqxKxwlL",
              cell_no: "G15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "UJw5MYbIpv9",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Sex Male"
            },
            {
              deuid: "UJw5MYbIpv9",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Sex Female"
            },
            {
              deuid: "kRrGCtqloph",
              cocuid: "StFfGxHbuDF",
              cell_no: "J15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "kRrGCtqloph",
              cocuid: "unqbIiA0uir",
              cell_no: "K15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "kRrGCtqloph",
              cocuid: "cMLHJtYTW40",
              cell_no: "L15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "kRrGCtqloph",
              cocuid: "VioJV8V3lMO",
              cell_no: "M15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "kRrGCtqloph",
              cocuid: "MYvkD09xyeq",
              cell_no: "N15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "kRrGCtqloph",
              cocuid: "xIJxneZjiWm",
              cell_no: "O15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "Izaihcp5imV",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "Izaihcp5imV",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "LJ8KCWU8OOV",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "LJ8KCWU8OOV",
              cocuid: "GSHgapGzSnl",
              cell_no: "S15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "LJ8KCWU8OOV",
              cocuid: "Ot71GbygcHf",
              cell_no: "T15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "pWXXIlhZ8PI",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D16",
              total: false,
              name: "Other Specialists Practitioners Stock Total default"
            },
            {
              deuid: "rvsb7MLMUbV",
              cocuid: "drJDZnHzeBH",
              cell_no: "E16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "rvsb7MLMUbV",
              cocuid: "VPShWMVpQkb",
              cell_no: "F16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "rvsb7MLMUbV",
              cocuid: "xcotqxKxwlL",
              cell_no: "G16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "MaejJOaJVXy",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H16",
              total: false,
              name: "Other Specialists Practitioners Stock By Sex Male"
            },
            {
              deuid: "MaejJOaJVXy",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I16",
              total: false,
              name: "Other Specialists Practitioners Stock By Sex Female"
            },
            {
              deuid: "DiZ4xWoiBwI",
              cocuid: "StFfGxHbuDF",
              cell_no: "J16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "DiZ4xWoiBwI",
              cocuid: "unqbIiA0uir",
              cell_no: "K16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "DiZ4xWoiBwI",
              cocuid: "cMLHJtYTW40",
              cell_no: "L16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "DiZ4xWoiBwI",
              cocuid: "VioJV8V3lMO",
              cell_no: "M16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "DiZ4xWoiBwI",
              cocuid: "MYvkD09xyeq",
              cell_no: "N16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "DiZ4xWoiBwI",
              cocuid: "xIJxneZjiWm",
              cell_no: "O16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "M6upUqnFt2Z",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "M6upUqnFt2Z",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "e0qvyzapmu3",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "e0qvyzapmu3",
              cocuid: "GSHgapGzSnl",
              cell_no: "S16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "e0qvyzapmu3",
              cocuid: "Ot71GbygcHf",
              cell_no: "T16",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "jj5ZtVGdcwd",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D17",
              total: false,
              name: "Medical doctors not further defined Stock Total default"
            },
            {
              deuid: "J1gsCnLV1C6",
              cocuid: "drJDZnHzeBH",
              cell_no: "E17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Activity Level Practising"
            },
            {
              deuid: "J1gsCnLV1C6",
              cocuid: "VPShWMVpQkb",
              cell_no: "F17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Activity Level Professionally active"
            },
            {
              deuid: "J1gsCnLV1C6",
              cocuid: "xcotqxKxwlL",
              cell_no: "G17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "tPCE4uhj0hy",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H17",
              total: false,
              name: "Medical doctors not further defined Stock By Sex Male"
            },
            {
              deuid: "tPCE4uhj0hy",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I17",
              total: false,
              name: "Medical doctors not further defined Stock By Sex Female"
            },
            {
              deuid: "jD7f0DfCi3d",
              cocuid: "StFfGxHbuDF",
              cell_no: "J17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Age Group < 25 yrs"
            },
            {
              deuid: "jD7f0DfCi3d",
              cocuid: "unqbIiA0uir",
              cell_no: "K17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "jD7f0DfCi3d",
              cocuid: "cMLHJtYTW40",
              cell_no: "L17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "jD7f0DfCi3d",
              cocuid: "VioJV8V3lMO",
              cell_no: "M17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "jD7f0DfCi3d",
              cocuid: "MYvkD09xyeq",
              cell_no: "N17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "jD7f0DfCi3d",
              cocuid: "xIJxneZjiWm",
              cell_no: "O17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Age Group > 65 yrs"
            },
            {
              deuid: "JRLY2XBpopS",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Place of Birth National Born"
            },
            {
              deuid: "JRLY2XBpopS",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "EKWgav1YgFc",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Place of Training Domestic"
            },
            {
              deuid: "EKWgav1YgFc",
              cocuid: "GSHgapGzSnl",
              cell_no: "S17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Place of Training Foreign"
            },
            {
              deuid: "EKWgav1YgFc",
              cocuid: "Ot71GbygcHf",
              cell_no: "T17",
              total: false,
              name:
                "Medical doctors not further defined Stock By Place of Training Unknown"
            },
            {
              deuid: "sYJkQfzW1BG",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D18",
              total: true,
              name: "Nursing Personnel Stock Total default"
            },
            {
              deuid: "ixpABERkob0",
              cocuid: "drJDZnHzeBH",
              cell_no: "E18",
              total: true,
              name: "Nursing  Personnel Stock By Activity Level Practising"
            },
            {
              deuid: "ixpABERkob0",
              cocuid: "VPShWMVpQkb",
              cell_no: "F18",
              total: true,
              name:
                "Nursing  Personnel Stock By Activity Level Professionally active"
            },
            {
              deuid: "ixpABERkob0",
              cocuid: "xcotqxKxwlL",
              cell_no: "G18",
              total: true,
              name:
                "Nursing  Personnel Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "wrceD1un08Y",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H18",
              total: true,
              name: "Nursing  Personnel Stock By Sex Male"
            },
            {
              deuid: "wrceD1un08Y",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I18",
              total: true,
              name: "Nursing  Personnel Stock By Sex Female"
            },
            {
              deuid: "o1HqfAPcWtK",
              cocuid: "StFfGxHbuDF",
              cell_no: "J18",
              total: true,
              name: "Nursing  Personnel  Stock By Age Group < 25 yrs"
            },
            {
              deuid: "o1HqfAPcWtK",
              cocuid: "unqbIiA0uir",
              cell_no: "K18",
              total: true,
              name: "Nursing  Personnel  Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "o1HqfAPcWtK",
              cocuid: "cMLHJtYTW40",
              cell_no: "L18",
              total: true,
              name: "Nursing  Personnel  Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "o1HqfAPcWtK",
              cocuid: "VioJV8V3lMO",
              cell_no: "M18",
              total: true,
              name: "Nursing  Personnel  Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "o1HqfAPcWtK",
              cocuid: "MYvkD09xyeq",
              cell_no: "N18",
              total: true,
              name: "Nursing  Personnel  Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "o1HqfAPcWtK",
              cocuid: "xIJxneZjiWm",
              cell_no: "O18",
              total: true,
              name: "Nursing  Personnel  Stock By Age Group > 65 yrs"
            },
            {
              deuid: "HmD6AHanlbO",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P18",
              total: true,
              name: "Nursing Personnel Stock By Place of Birth National Born"
            },
            {
              deuid: "HmD6AHanlbO",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q18",
              total: true,
              name: "Nursing Personnel Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "qfVp6vFGOpZ",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R18",
              total: true,
              name: "Nursing Personnel By Place of Training Domestic"
            },
            {
              deuid: "qfVp6vFGOpZ",
              cocuid: "GSHgapGzSnl",
              cell_no: "S18",
              total: true,
              name: "Nursing Personnel By Place of Training Foreign"
            },
            {
              deuid: "qfVp6vFGOpZ",
              cocuid: "Ot71GbygcHf",
              cell_no: "T18",
              total: true,
              name: "Nursing Personnel By Place of Training Unknown"
            },
            {
              deuid: "LrG8CqG0mhV",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D19",
              total: false,
              name: "Nursing Professionals Stock Total default"
            },
            {
              deuid: "M1ZpUXbo7Ql",
              cocuid: "drJDZnHzeBH",
              cell_no: "E19",
              total: false,
              name: "Nursing Professionals Stock By Activity Level Practising"
            },
            {
              deuid: "M1ZpUXbo7Ql",
              cocuid: "VPShWMVpQkb",
              cell_no: "F19",
              total: false,
              name:
                "Nursing Professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "M1ZpUXbo7Ql",
              cocuid: "xcotqxKxwlL",
              cell_no: "G19",
              total: false,
              name:
                "Nursing Professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "ejrzC4bEJ5R",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H19",
              total: false,
              name: "Nursing Professionals Stock By Sex Male"
            },
            {
              deuid: "ejrzC4bEJ5R",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I19",
              total: false,
              name: "Nursing Professionals Stock By Sex Female"
            },
            {
              deuid: "BrtoXLjA4pi",
              cocuid: "StFfGxHbuDF",
              cell_no: "J19",
              total: false,
              name: "Nursing Professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "BrtoXLjA4pi",
              cocuid: "unqbIiA0uir",
              cell_no: "K19",
              total: false,
              name: "Nursing Professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "BrtoXLjA4pi",
              cocuid: "cMLHJtYTW40",
              cell_no: "L19",
              total: false,
              name: "Nursing Professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "BrtoXLjA4pi",
              cocuid: "VioJV8V3lMO",
              cell_no: "M19",
              total: false,
              name: "Nursing Professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "BrtoXLjA4pi",
              cocuid: "MYvkD09xyeq",
              cell_no: "N19",
              total: false,
              name: "Nursing Professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "BrtoXLjA4pi",
              cocuid: "xIJxneZjiWm",
              cell_no: "O19",
              total: false,
              name: "Nursing Professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "oNyG3X3DPbz",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P19",
              total: false,
              name:
                "Nursing Professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "oNyG3X3DPbz",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q19",
              total: false,
              name: "Nursing Professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "aVL32L9ycAJ",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R19",
              total: false,
              name: "Nursing Professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "aVL32L9ycAJ",
              cocuid: "GSHgapGzSnl",
              cell_no: "S19",
              total: false,
              name: "Nursing Professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "aVL32L9ycAJ",
              cocuid: "Ot71GbygcHf",
              cell_no: "T19",
              total: false,
              name: "Nursing Professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "qKf4eMvqKqq",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training Total default"
            },
            {
              deuid: "PhGYsKg6Z64",
              cocuid: "drJDZnHzeBH",
              cell_no: "E20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Activity Level Practising"
            },
            {
              deuid: "PhGYsKg6Z64",
              cocuid: "VPShWMVpQkb",
              cell_no: "F20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Activity Level Professionally active"
            },
            {
              deuid: "PhGYsKg6Z64",
              cocuid: "xcotqxKxwlL",
              cell_no: "G20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Activity Level Licensed to practise"
            },
            {
              deuid: "HENe5Xv6B7j",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Sex Male"
            },
            {
              deuid: "HENe5Xv6B7j",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Sex Female"
            },
            {
              deuid: "cfTgv8GDYXQ",
              cocuid: "StFfGxHbuDF",
              cell_no: "J20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Age Group < 25 yrs"
            },
            {
              deuid: "cfTgv8GDYXQ",
              cocuid: "unqbIiA0uir",
              cell_no: "K20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Age Group 25-34 yrs"
            },
            {
              deuid: "cfTgv8GDYXQ",
              cocuid: "cMLHJtYTW40",
              cell_no: "L20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Age Group 35-44 yrs"
            },
            {
              deuid: "cfTgv8GDYXQ",
              cocuid: "VioJV8V3lMO",
              cell_no: "M20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Age Group 45-54 yrs"
            },
            {
              deuid: "cfTgv8GDYXQ",
              cocuid: "MYvkD09xyeq",
              cell_no: "N20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Age Group 55-64 yrs"
            },
            {
              deuid: "cfTgv8GDYXQ",
              cocuid: "xIJxneZjiWm",
              cell_no: "O20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Age Group > 65 yrs"
            },
            {
              deuid: "iJzGpY38k41",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Place of Birth National Born"
            },
            {
              deuid: "iJzGpY38k41",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Place of Birth Foreign Born"
            },
            {
              deuid: "VLSa4evEl7A",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Place of Training Domestic"
            },
            {
              deuid: "VLSa4evEl7A",
              cocuid: "GSHgapGzSnl",
              cell_no: "S20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Place of Training Foreign"
            },
            {
              deuid: "VLSa4evEl7A",
              cocuid: "Ot71GbygcHf",
              cell_no: "T20",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Place of Training Unknown"
            },
            {
              deuid: "eEQkLvHHoSU",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D21",
              total: false,
              name: "Nursing Associate Professionals Stock Total default"
            },
            {
              deuid: "m7MTceflWz3",
              cocuid: "drJDZnHzeBH",
              cell_no: "E21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Activity Level Practising"
            },
            {
              deuid: "m7MTceflWz3",
              cocuid: "VPShWMVpQkb",
              cell_no: "F21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "m7MTceflWz3",
              cocuid: "xcotqxKxwlL",
              cell_no: "G21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "oWqVbrpimjf",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H21",
              total: false,
              name: "Nursing Associate Professionals Stock By Sex Male"
            },
            {
              deuid: "oWqVbrpimjf",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I21",
              total: false,
              name: "Nursing Associate Professionals Stock By Sex Female"
            },
            {
              deuid: "NVuew7FtnQS",
              cocuid: "StFfGxHbuDF",
              cell_no: "J21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "NVuew7FtnQS",
              cocuid: "unqbIiA0uir",
              cell_no: "K21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "NVuew7FtnQS",
              cocuid: "cMLHJtYTW40",
              cell_no: "L21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "NVuew7FtnQS",
              cocuid: "VioJV8V3lMO",
              cell_no: "M21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "NVuew7FtnQS",
              cocuid: "MYvkD09xyeq",
              cell_no: "N21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "NVuew7FtnQS",
              cocuid: "xIJxneZjiWm",
              cell_no: "O21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "ABy98AXLIvi",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "ABy98AXLIvi",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "Xya97JPAwJP",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "Xya97JPAwJP",
              cocuid: "GSHgapGzSnl",
              cell_no: "S21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "Xya97JPAwJP",
              cocuid: "Ot71GbygcHf",
              cell_no: "T21",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "KwIlxiiBBjV",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training Total  default"
            },
            {
              deuid: "c4JWYSERnO2",
              cocuid: "drJDZnHzeBH",
              cell_no: "E22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Activity Level Practising"
            },
            {
              deuid: "c4JWYSERnO2",
              cocuid: "VPShWMVpQkb",
              cell_no: "F22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Activity Level Professionally active"
            },
            {
              deuid: "c4JWYSERnO2",
              cocuid: "xcotqxKxwlL",
              cell_no: "G22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Activity Level Licensed to practise"
            },
            {
              deuid: "vhjxKd80p4D",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Sex Male"
            },
            {
              deuid: "vhjxKd80p4D",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Sex Female"
            },
            {
              deuid: "Nf5yWoOEfSm",
              cocuid: "StFfGxHbuDF",
              cell_no: "J22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Age Group < 25 yrs"
            },
            {
              deuid: "Nf5yWoOEfSm",
              cocuid: "unqbIiA0uir",
              cell_no: "K22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Age Group 25-34 yrs"
            },
            {
              deuid: "Nf5yWoOEfSm",
              cocuid: "cMLHJtYTW40",
              cell_no: "L22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Age Group 35-44 yrs"
            },
            {
              deuid: "Nf5yWoOEfSm",
              cocuid: "VioJV8V3lMO",
              cell_no: "M22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Age Group 45-54 yrs"
            },
            {
              deuid: "Nf5yWoOEfSm",
              cocuid: "MYvkD09xyeq",
              cell_no: "N22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Age Group 55-64 yrs"
            },
            {
              deuid: "Nf5yWoOEfSm",
              cocuid: "xIJxneZjiWm",
              cell_no: "O22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Age Group > 65 yrs"
            },
            {
              deuid: "pRrlf6NYYmU",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Place of Birth National Born"
            },
            {
              deuid: "pRrlf6NYYmU",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Place of Birth Foreign Born"
            },
            {
              deuid: "cSqX4ymZmHA",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Place of Training Domestic"
            },
            {
              deuid: "cSqX4ymZmHA",
              cocuid: "GSHgapGzSnl",
              cell_no: "S22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Place of Training Foreign"
            },
            {
              deuid: "cSqX4ymZmHA",
              cocuid: "Ot71GbygcHf",
              cell_no: "T22",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Place of Training Unknown"
            },
            {
              deuid: "CpUti69L5aW",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D23",
              total: false,
              name: "Nurses not further defined Stock Total default"
            },
            {
              deuid: "Osqz2NJoO0h",
              cocuid: "drJDZnHzeBH",
              cell_no: "E23",
              total: false,
              name:
                "Nurses not further defined Stock By Activity Level Practising"
            },
            {
              deuid: "Osqz2NJoO0h",
              cocuid: "VPShWMVpQkb",
              cell_no: "F23",
              total: false,
              name:
                "Nurses not further defined Stock By Activity Level Professionally active"
            },
            {
              deuid: "Osqz2NJoO0h",
              cocuid: "xcotqxKxwlL",
              cell_no: "G23",
              total: false,
              name:
                "Nurses not further defined Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "VIWOOPfPUnX",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H23",
              total: false,
              name: "Nurses not further defined Stock By Sex Male"
            },
            {
              deuid: "VIWOOPfPUnX",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I23",
              total: false,
              name: "Nurses not further defined Stock By Sex Female"
            },
            {
              deuid: "xpa2vZRWT7M",
              cocuid: "StFfGxHbuDF",
              cell_no: "J23",
              total: false,
              name: "Nurses not further defined Stock By Age Group < 25 yrs"
            },
            {
              deuid: "xpa2vZRWT7M",
              cocuid: "unqbIiA0uir",
              cell_no: "K23",
              total: false,
              name: "Nurses not further defined Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "xpa2vZRWT7M",
              cocuid: "cMLHJtYTW40",
              cell_no: "L23",
              total: false,
              name: "Nurses not further defined Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "xpa2vZRWT7M",
              cocuid: "VioJV8V3lMO",
              cell_no: "M23",
              total: false,
              name: "Nurses not further defined Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "xpa2vZRWT7M",
              cocuid: "MYvkD09xyeq",
              cell_no: "N23",
              total: false,
              name: "Nurses not further defined Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "xpa2vZRWT7M",
              cocuid: "xIJxneZjiWm",
              cell_no: "O23",
              total: false,
              name: "Nurses not further defined Stock By Age Group > 65 yrs"
            },
            {
              deuid: "d3IcPgQbeH5",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P23",
              total: false,
              name:
                "Nurses not further defined Stock By Place of Birth National Born"
            },
            {
              deuid: "d3IcPgQbeH5",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q23",
              total: false,
              name:
                "Nurses not further defined Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "lTZshHjGQEe",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R23",
              total: false,
              name:
                "Nurses not further defined Stock By Place of Training Domestic"
            },
            {
              deuid: "lTZshHjGQEe",
              cocuid: "GSHgapGzSnl",
              cell_no: "S23",
              total: false,
              name:
                "Nurses not further defined Stock By Place of Training Foreign"
            },
            {
              deuid: "lTZshHjGQEe",
              cocuid: "Ot71GbygcHf",
              cell_no: "T23",
              total: false,
              name:
                "Nurses not further defined Stock By Place of Training Unknown"
            },
            {
              deuid: "t5jOlOCqSr3",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D24",
              total: true,
              name: "Midwifery personnel Stock Total default"
            },
            {
              deuid: "U20BELNfToU",
              cocuid: "drJDZnHzeBH",
              cell_no: "E24",
              total: true,
              name: "Midwifery personnel Stock By Activity Level Practising"
            },
            {
              deuid: "U20BELNfToU",
              cocuid: "VPShWMVpQkb",
              cell_no: "F24",
              total: true,
              name:
                "Midwifery personnel Stock By Activity Level Professionally active"
            },
            {
              deuid: "U20BELNfToU",
              cocuid: "xcotqxKxwlL",
              cell_no: "G24",
              total: true,
              name:
                "Midwifery personnel Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "MazllecOrQC",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H24",
              total: true,
              name: "Midwifery personnel Stock By Sex Male"
            },
            {
              deuid: "MazllecOrQC",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I24",
              total: true,
              name: "Midwifery personnel Stock By Sex Female"
            },
            {
              deuid: "ZPgTreSg9Xd",
              cocuid: "StFfGxHbuDF",
              cell_no: "J24",
              total: true,
              name: "Midwifery personnel Stock By Age Group < 25 yrs"
            },
            {
              deuid: "ZPgTreSg9Xd",
              cocuid: "unqbIiA0uir",
              cell_no: "K24",
              total: true,
              name: "Midwifery personnel Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "ZPgTreSg9Xd",
              cocuid: "cMLHJtYTW40",
              cell_no: "L24",
              total: true,
              name: "Midwifery personnel Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "ZPgTreSg9Xd",
              cocuid: "VioJV8V3lMO",
              cell_no: "M24",
              total: true,
              name: "Midwifery personnel Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "ZPgTreSg9Xd",
              cocuid: "MYvkD09xyeq",
              cell_no: "N24",
              total: true,
              name: "Midwifery personnel Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "ZPgTreSg9Xd",
              cocuid: "xIJxneZjiWm",
              cell_no: "O24",
              total: true,
              name: "Midwifery personnel Stock By Age Group > 65 yrs"
            },
            {
              deuid: "qE7bXo1gdhI",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P24",
              total: true,
              name: "Midwifery personnel Stock By Place of Birth National Born"
            },
            {
              deuid: "qE7bXo1gdhI",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q24",
              total: true,
              name: "Midwifery personnel Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "Xw3tkU97nlR",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R24",
              total: true,
              name: "Midwifery personnel Stock By Place of Training Domestic"
            },
            {
              deuid: "Xw3tkU97nlR",
              cocuid: "GSHgapGzSnl",
              cell_no: "S24",
              total: true,
              name: "Midwifery personnel Stock By Place of Training Foreign"
            },
            {
              deuid: "Xw3tkU97nlR",
              cocuid: "Ot71GbygcHf",
              cell_no: "T24",
              total: true,
              name: "Midwifery personnel Stock By Place of Training Unknown"
            },
            {
              deuid: "nBLlavpOdkF",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D25",
              total: false,
              name: "Midwifery Professionals Stock Total default"
            },
            {
              deuid: "Ml6HBooImtM",
              cocuid: "drJDZnHzeBH",
              cell_no: "E25",
              total: false,
              name: "Midwifery Professionals Stock By Activity Level Practising"
            },
            {
              deuid: "Ml6HBooImtM",
              cocuid: "VPShWMVpQkb",
              cell_no: "F25",
              total: false,
              name:
                "Midwifery Professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "Ml6HBooImtM",
              cocuid: "xcotqxKxwlL",
              cell_no: "G25",
              total: false,
              name:
                "Midwifery Professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "tWbJWEUNu2F",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H25",
              total: false,
              name: "Midwifery Professionals Stock By Sex Male"
            },
            {
              deuid: "tWbJWEUNu2F",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I25",
              total: false,
              name: "Midwifery Professionals Stock By Sex Female"
            },
            {
              deuid: "aOYOo12rVAs",
              cocuid: "StFfGxHbuDF",
              cell_no: "J25",
              total: false,
              name: "Midwifery Professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "aOYOo12rVAs",
              cocuid: "unqbIiA0uir",
              cell_no: "K25",
              total: false,
              name: "Midwifery Professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "aOYOo12rVAs",
              cocuid: "cMLHJtYTW40",
              cell_no: "L25",
              total: false,
              name: "Midwifery Professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "aOYOo12rVAs",
              cocuid: "VioJV8V3lMO",
              cell_no: "M25",
              total: false,
              name: "Midwifery Professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "aOYOo12rVAs",
              cocuid: "MYvkD09xyeq",
              cell_no: "N25",
              total: false,
              name: "Midwifery Professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "aOYOo12rVAs",
              cocuid: "xIJxneZjiWm",
              cell_no: "O25",
              total: false,
              name: "Midwifery Professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "EnoivPEWUMM",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P25",
              total: false,
              name:
                "Midwifery Professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "EnoivPEWUMM",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q25",
              total: false,
              name:
                "Midwifery Professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "yelUZHtyQ3J",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R25",
              total: false,
              name:
                "Midwifery Professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "yelUZHtyQ3J",
              cocuid: "GSHgapGzSnl",
              cell_no: "S25",
              total: false,
              name: "Midwifery Professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "yelUZHtyQ3J",
              cocuid: "Ot71GbygcHf",
              cell_no: "T25",
              total: false,
              name: "Midwifery Professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "uHCDEltKEA6",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D26",
              total: false,
              name: "Midwifery Associate Professionals Stock Total default"
            },
            {
              deuid: "wQ1FfvMZU9a",
              cocuid: "drJDZnHzeBH",
              cell_no: "E26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Activity Level Practising"
            },
            {
              deuid: "wQ1FfvMZU9a",
              cocuid: "VPShWMVpQkb",
              cell_no: "F26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "wQ1FfvMZU9a",
              cocuid: "xcotqxKxwlL",
              cell_no: "G26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "Gt3WTdWYUeJ",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H26",
              total: false,
              name: "Midwifery Associate Professionals Stock By Sex Male"
            },
            {
              deuid: "Gt3WTdWYUeJ",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I26",
              total: false,
              name: "Midwifery Associate Professionals Stock By Sex Female"
            },
            {
              deuid: "uoqUo1n2Bbr",
              cocuid: "StFfGxHbuDF",
              cell_no: "J26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "uoqUo1n2Bbr",
              cocuid: "unqbIiA0uir",
              cell_no: "K26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "uoqUo1n2Bbr",
              cocuid: "cMLHJtYTW40",
              cell_no: "L26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "uoqUo1n2Bbr",
              cocuid: "VioJV8V3lMO",
              cell_no: "M26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "uoqUo1n2Bbr",
              cocuid: "MYvkD09xyeq",
              cell_no: "N26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "uoqUo1n2Bbr",
              cocuid: "xIJxneZjiWm",
              cell_no: "O26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "mEaeC6W4Oga",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "mEaeC6W4Oga",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "UTEeOMyhBoY",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "UTEeOMyhBoY",
              cocuid: "GSHgapGzSnl",
              cell_no: "S26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "UTEeOMyhBoY",
              cocuid: "Ot71GbygcHf",
              cell_no: "T26",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "LPTrylkVM4Q",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D27",
              total: false,
              name: "Midwives not further defined Stock Total default"
            },
            {
              deuid: "uTwQaiIEDk6",
              cocuid: "drJDZnHzeBH",
              cell_no: "E27",
              total: false,
              name:
                "Midwives not further defined Stock By Activity Level Practising"
            },
            {
              deuid: "uTwQaiIEDk6",
              cocuid: "VPShWMVpQkb",
              cell_no: "F27",
              total: false,
              name:
                "Midwives not further defined Stock By Activity Level Professionally active"
            },
            {
              deuid: "uTwQaiIEDk6",
              cocuid: "xcotqxKxwlL",
              cell_no: "G27",
              total: false,
              name:
                "Midwives not further defined Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "arZWO8Ag3iO",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H27",
              total: false,
              name: "Midwives not further defined Stock By Sex Male"
            },
            {
              deuid: "arZWO8Ag3iO",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I27",
              total: false,
              name: "Midwives not further defined Stock By Sex Female"
            },
            {
              deuid: "PRFVamHB0VQ",
              cocuid: "StFfGxHbuDF",
              cell_no: "J27",
              total: false,
              name: "Midwives not further defined Stock By Age Group < 25 yrs"
            },
            {
              deuid: "PRFVamHB0VQ",
              cocuid: "unqbIiA0uir",
              cell_no: "K27",
              total: false,
              name: "Midwives not further defined Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "PRFVamHB0VQ",
              cocuid: "cMLHJtYTW40",
              cell_no: "L27",
              total: false,
              name: "Midwives not further defined Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "PRFVamHB0VQ",
              cocuid: "VioJV8V3lMO",
              cell_no: "M27",
              total: false,
              name: "Midwives not further defined Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "PRFVamHB0VQ",
              cocuid: "MYvkD09xyeq",
              cell_no: "N27",
              total: false,
              name: "Midwives not further defined Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "PRFVamHB0VQ",
              cocuid: "xIJxneZjiWm",
              cell_no: "O27",
              total: false,
              name: "Midwives not further defined Stock By Age Group > 65 yrs"
            },
            {
              deuid: "u1aymSGFTqA",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P27",
              total: false,
              name:
                "Midwives not further defined Stock By Place of Birth National Born"
            },
            {
              deuid: "u1aymSGFTqA",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q27",
              total: false,
              name:
                "Midwives not further defined Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "ChqxKtGrHVA",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R27",
              total: false,
              name:
                "Midwives not further defined Stock By Place of Training Domestic"
            },
            {
              deuid: "ChqxKtGrHVA",
              cocuid: "GSHgapGzSnl",
              cell_no: "S27",
              total: false,
              name:
                "Midwives not further defined Stock By Place of Training Foreign"
            },
            {
              deuid: "ChqxKtGrHVA",
              cocuid: "Ot71GbygcHf",
              cell_no: "T27",
              total: false,
              name:
                "Midwives not further defined Stock By Place of Training Unknown"
            },
            {
              deuid: "tqciYTsRsV1",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D28",
              total: false,
              name: "Dentists Stock Total default"
            },
            {
              deuid: "aBKbsKeMhM6",
              cocuid: "drJDZnHzeBH",
              cell_no: "E28",
              total: false,
              name: "Dentists Stock By Activity Level Practising"
            },
            {
              deuid: "aBKbsKeMhM6",
              cocuid: "VPShWMVpQkb",
              cell_no: "F28",
              total: false,
              name: "Dentists Stock By Activity Level Professionally active"
            },
            {
              deuid: "aBKbsKeMhM6",
              cocuid: "xcotqxKxwlL",
              cell_no: "G28",
              total: false,
              name: "Dentists Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "ywCZ6qdZsCX",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H28",
              total: false,
              name: "Dentists Stock By Sex Male"
            },
            {
              deuid: "ywCZ6qdZsCX",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I28",
              total: false,
              name: "Dentists Stock By Sex Female"
            },
            {
              deuid: "YSl2WAd1E5g",
              cocuid: "StFfGxHbuDF",
              cell_no: "J28",
              total: false,
              name: "Dentists Stock By Age Group < 25 yrs"
            },
            {
              deuid: "YSl2WAd1E5g",
              cocuid: "unqbIiA0uir",
              cell_no: "K28",
              total: false,
              name: "Dentists Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "YSl2WAd1E5g",
              cocuid: "cMLHJtYTW40",
              cell_no: "L28",
              total: false,
              name: "Dentists Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "YSl2WAd1E5g",
              cocuid: "VioJV8V3lMO",
              cell_no: "M28",
              total: false,
              name: "Dentists Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "YSl2WAd1E5g",
              cocuid: "MYvkD09xyeq",
              cell_no: "N28",
              total: false,
              name: "Dentists Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "YSl2WAd1E5g",
              cocuid: "xIJxneZjiWm",
              cell_no: "O28",
              total: false,
              name: "Dentists Stock By Age Group > 65 yrs"
            },
            {
              deuid: "wFsm98Bnf40",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P28",
              total: false,
              name: "Dentists Stock By Place of Birth National Born"
            },
            {
              deuid: "wFsm98Bnf40",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q28",
              total: false,
              name: "Dentists Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "zGNcDLRXn25",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R28",
              total: false,
              name: "Dentists Stock By Place of Training Domestic"
            },
            {
              deuid: "zGNcDLRXn25",
              cocuid: "GSHgapGzSnl",
              cell_no: "S28",
              total: false,
              name: "Dentists Stock By Place of Training Foreign"
            },
            {
              deuid: "zGNcDLRXn25",
              cocuid: "Ot71GbygcHf",
              cell_no: "T28",
              total: false,
              name: "Dentists Stock By Place of Training Unknown"
            },
            {
              deuid: "VIMlhSMF1Yl",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D29",
              total: false,
              name: "Dental Assistants and Therapists Stock Total default"
            },
            {
              deuid: "mM3VtbRdurN",
              cocuid: "drJDZnHzeBH",
              cell_no: "E29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Activity Level Practising"
            },
            {
              deuid: "mM3VtbRdurN",
              cocuid: "VPShWMVpQkb",
              cell_no: "F29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Activity Level Professionally active"
            },
            {
              deuid: "mM3VtbRdurN",
              cocuid: "xcotqxKxwlL",
              cell_no: "G29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "rQbVIOyPNHb",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H29",
              total: false,
              name: "Dental Assistants and Therapists Stock By Sex Male"
            },
            {
              deuid: "rQbVIOyPNHb",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I29",
              total: false,
              name: "Dental Assistants and Therapists Stock By Sex Female"
            },
            {
              deuid: "nXfMiK28avb",
              cocuid: "StFfGxHbuDF",
              cell_no: "J29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Age Group < 25 yrs"
            },
            {
              deuid: "nXfMiK28avb",
              cocuid: "unqbIiA0uir",
              cell_no: "K29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "nXfMiK28avb",
              cocuid: "cMLHJtYTW40",
              cell_no: "L29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "nXfMiK28avb",
              cocuid: "VioJV8V3lMO",
              cell_no: "M29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "nXfMiK28avb",
              cocuid: "MYvkD09xyeq",
              cell_no: "N29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "nXfMiK28avb",
              cocuid: "xIJxneZjiWm",
              cell_no: "O29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Age Group > 65 yrs"
            },
            {
              deuid: "kkOw6gPK2OK",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Place of Birth National Born"
            },
            {
              deuid: "kkOw6gPK2OK",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "CnreQmZbCwP",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Place of Training Domestic"
            },
            {
              deuid: "CnreQmZbCwP",
              cocuid: "GSHgapGzSnl",
              cell_no: "S29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Place of Training Foreign"
            },
            {
              deuid: "CnreQmZbCwP",
              cocuid: "Ot71GbygcHf",
              cell_no: "T29",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Place of Training Unknown"
            },
            {
              deuid: "w9b8i3HljgB",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D30",
              total: false,
              name: "Dental Prosthetic Technicians Stock Total default"
            },
            {
              deuid: "DgWsmHVv1JM",
              cocuid: "drJDZnHzeBH",
              cell_no: "E30",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Activity Level Practising"
            },
            {
              deuid: "DgWsmHVv1JM",
              cocuid: "VPShWMVpQkb",
              cell_no: "F30",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Activity Level Professionally active"
            },
            {
              deuid: "DgWsmHVv1JM",
              cocuid: "xcotqxKxwlL",
              cell_no: "G30",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "JXZp3qBlqKP",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H30",
              total: false,
              name: "Dental Prosthetic Technicians Stock By Sex Male"
            },
            {
              deuid: "JXZp3qBlqKP",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I30",
              total: false,
              name: "Dental Prosthetic Technicians Stock By Sex Female"
            },
            {
              deuid: "jC51Spxta9C",
              cocuid: "StFfGxHbuDF",
              cell_no: "J30",
              total: false,
              name: "Dental Prosthetic Technicians Stock By Age Group < 25 yrs"
            },
            {
              deuid: "jC51Spxta9C",
              cocuid: "unqbIiA0uir",
              cell_no: "K30",
              total: false,
              name: "Dental Prosthetic Technicians Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "jC51Spxta9C",
              cocuid: "cMLHJtYTW40",
              cell_no: "L30",
              total: false,
              name: "Dental Prosthetic Technicians Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "jC51Spxta9C",
              cocuid: "VioJV8V3lMO",
              cell_no: "M30",
              total: false,
              name: "Dental Prosthetic Technicians Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "jC51Spxta9C",
              cocuid: "MYvkD09xyeq",
              cell_no: "N30",
              total: false,
              name: "Dental Prosthetic Technicians Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "jC51Spxta9C",
              cocuid: "xIJxneZjiWm",
              cell_no: "O30",
              total: false,
              name: "Dental Prosthetic Technicians Stock By Age Group > 65 yrs"
            },
            {
              deuid: "XOuEbu7a0Fn",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P30",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Place of Birth National Born"
            },
            {
              deuid: "XOuEbu7a0Fn",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q30",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "kNKgbh9K2Ni",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R30",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Place of Training Domestic"
            },
            {
              deuid: "kNKgbh9K2Ni",
              cocuid: "GSHgapGzSnl",
              cell_no: "S30",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Place of Training Foreign"
            },
            {
              deuid: "kNKgbh9K2Ni",
              cocuid: "Ot71GbygcHf",
              cell_no: "T30",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Place of Training Unknown"
            },
            {
              deuid: "iDHwJraJp3Y",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D31",
              total: false,
              name: "Pharmacists Stock Total default"
            },
            {
              deuid: "mx3f7jzRUn6",
              cocuid: "drJDZnHzeBH",
              cell_no: "E31",
              total: false,
              name: "Pharmacists Stock By Activity Level Practising"
            },
            {
              deuid: "mx3f7jzRUn6",
              cocuid: "VPShWMVpQkb",
              cell_no: "F31",
              total: false,
              name: "Pharmacists Stock By Activity Level Professionally active"
            },
            {
              deuid: "mx3f7jzRUn6",
              cocuid: "xcotqxKxwlL",
              cell_no: "G31",
              total: false,
              name: "Pharmacists Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "Et2p1cf7EeZ",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H31",
              total: false,
              name: "Pharmacists Stock By Sex Male"
            },
            {
              deuid: "Et2p1cf7EeZ",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I31",
              total: false,
              name: "Pharmacists Stock By Sex Female"
            },
            {
              deuid: "VCVhaAxv3AP",
              cocuid: "StFfGxHbuDF",
              cell_no: "J31",
              total: false,
              name: "Pharmacists Stock By Age Group < 25 yrs"
            },
            {
              deuid: "VCVhaAxv3AP",
              cocuid: "unqbIiA0uir",
              cell_no: "K31",
              total: false,
              name: "Pharmacists Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "VCVhaAxv3AP",
              cocuid: "cMLHJtYTW40",
              cell_no: "L31",
              total: false,
              name: "Pharmacists Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "VCVhaAxv3AP",
              cocuid: "VioJV8V3lMO",
              cell_no: "M31",
              total: false,
              name: "Pharmacists Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "VCVhaAxv3AP",
              cocuid: "MYvkD09xyeq",
              cell_no: "N31",
              total: false,
              name: "Pharmacists Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "VCVhaAxv3AP",
              cocuid: "xIJxneZjiWm",
              cell_no: "O31",
              total: false,
              name: "Pharmacists Stock By Age Group > 65 yrs"
            },
            {
              deuid: "O3JfrNS9Ewj",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P31",
              total: false,
              name: "Pharmacists Stock By Place of Birth National Born"
            },
            {
              deuid: "O3JfrNS9Ewj",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q31",
              total: false,
              name: "Pharmacists Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "M22mM4UEDjy",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R31",
              total: false,
              name: "Pharmacists Stock By Place of Training Domestic"
            },
            {
              deuid: "M22mM4UEDjy",
              cocuid: "GSHgapGzSnl",
              cell_no: "S31",
              total: false,
              name: "Pharmacists Stock By Place of Training Foreign"
            },
            {
              deuid: "M22mM4UEDjy",
              cocuid: "Ot71GbygcHf",
              cell_no: "T31",
              total: false,
              name: "Pharmacists Stock By Place of Training Unknown"
            },
            {
              deuid: "SOU2X25z1dq",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock Total default"
            },
            {
              deuid: "xTOiNS0zd6y",
              cocuid: "drJDZnHzeBH",
              cell_no: "E32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Activity Level Practising"
            },
            {
              deuid: "xTOiNS0zd6y",
              cocuid: "VPShWMVpQkb",
              cell_no: "F32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Activity Level Professionally active"
            },
            {
              deuid: "xTOiNS0zd6y",
              cocuid: "xcotqxKxwlL",
              cell_no: "G32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "XAFQH7WySNo",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Sex Male"
            },
            {
              deuid: "XAFQH7WySNo",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Sex Female"
            },
            {
              deuid: "lZa8WGsBpZt",
              cocuid: "StFfGxHbuDF",
              cell_no: "J32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Age Group < 25 yrs"
            },
            {
              deuid: "lZa8WGsBpZt",
              cocuid: "unqbIiA0uir",
              cell_no: "K32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "lZa8WGsBpZt",
              cocuid: "cMLHJtYTW40",
              cell_no: "L32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "lZa8WGsBpZt",
              cocuid: "VioJV8V3lMO",
              cell_no: "M32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "lZa8WGsBpZt",
              cocuid: "MYvkD09xyeq",
              cell_no: "N32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "lZa8WGsBpZt",
              cocuid: "xIJxneZjiWm",
              cell_no: "O32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Age Group > 65 yrs"
            },
            {
              deuid: "rRfHbsBLHRx",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Place of Birth National Born"
            },
            {
              deuid: "rRfHbsBLHRx",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "xz2VQl9nOPd",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Place of Training Domestic"
            },
            {
              deuid: "xz2VQl9nOPd",
              cocuid: "GSHgapGzSnl",
              cell_no: "S32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Place of Training Foreign"
            },
            {
              deuid: "xz2VQl9nOPd",
              cocuid: "Ot71GbygcHf",
              cell_no: "T32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Place of Training Unknown"
            },
            {
              deuid: "Yz371d8I7vi",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D33",
              total: false,
              name: "Paramedical Practitioners Stock Total default"
            },
            {
              deuid: "m4Yz9Nz5Eir",
              cocuid: "drJDZnHzeBH",
              cell_no: "E33",
              total: false,
              name:
                "Paramedical Practitioners Stock By Activity Level Practising"
            },
            {
              deuid: "m4Yz9Nz5Eir",
              cocuid: "VPShWMVpQkb",
              cell_no: "F33",
              total: false,
              name:
                "Paramedical Practitioners Stock By Activity Level Professionally active"
            },
            {
              deuid: "m4Yz9Nz5Eir",
              cocuid: "xcotqxKxwlL",
              cell_no: "G33",
              total: false,
              name:
                "Paramedical Practitioners Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "weKsEzlw3cl",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H33",
              total: false,
              name: "Paramedical Practitioners Stock By Sex Male"
            },
            {
              deuid: "weKsEzlw3cl",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I33",
              total: false,
              name: "Paramedical Practitioners Stock By Sex Female"
            },
            {
              deuid: "hnFSVoNKKBM",
              cocuid: "StFfGxHbuDF",
              cell_no: "J33",
              total: false,
              name: "Paramedical Practitioners Stock By Age Group < 25 yrs"
            },
            {
              deuid: "hnFSVoNKKBM",
              cocuid: "unqbIiA0uir",
              cell_no: "K33",
              total: false,
              name: "Paramedical Practitioners Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "hnFSVoNKKBM",
              cocuid: "cMLHJtYTW40",
              cell_no: "L33",
              total: false,
              name: "Paramedical Practitioners Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "hnFSVoNKKBM",
              cocuid: "VioJV8V3lMO",
              cell_no: "M33",
              total: false,
              name: "Paramedical Practitioners Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "hnFSVoNKKBM",
              cocuid: "MYvkD09xyeq",
              cell_no: "N33",
              total: false,
              name: "Paramedical Practitioners Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "hnFSVoNKKBM",
              cocuid: "xIJxneZjiWm",
              cell_no: "O33",
              total: false,
              name: "Paramedical Practitioners Stock By Age Group > 65 yrs"
            },
            {
              deuid: "D2jYg0gfya0",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P33",
              total: false,
              name:
                "Paramedical Practitioners Stock By Place of Birth National Born"
            },
            {
              deuid: "D2jYg0gfya0",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q33",
              total: false,
              name:
                "Paramedical Practitioners Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "sRVnECfvFs7",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R33",
              total: false,
              name:
                "Paramedical Practitioners Stock By Place of Training Domestic"
            },
            {
              deuid: "sRVnECfvFs7",
              cocuid: "GSHgapGzSnl",
              cell_no: "S33",
              total: false,
              name:
                "Paramedical Practitioners Stock By Place of Training Foreign"
            },
            {
              deuid: "sRVnECfvFs7",
              cocuid: "Ot71GbygcHf",
              cell_no: "T33",
              total: false,
              name:
                "Paramedical Practitioners Stock By Place of Training Unknown"
            },
            {
              deuid: "RNCFRfcGsEq",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D34",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians Stock Total default"
            },
            {
              deuid: "zWqYNMlrEgt",
              cocuid: "drJDZnHzeBH",
              cell_no: "E34",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Activity Level Practising"
            },
            {
              deuid: "zWqYNMlrEgt",
              cocuid: "VPShWMVpQkb",
              cell_no: "F34",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Activity Level Professionally active"
            },
            {
              deuid: "zWqYNMlrEgt",
              cocuid: "xcotqxKxwlL",
              cell_no: "G34",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "W4IjHlh3nqi",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Sex Male"
            },
            {
              deuid: "W4IjHlh3nqi",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Sex Female"
            },
            {
              deuid: "nW6KgPEVLIt",
              cocuid: "StFfGxHbuDF",
              cell_no: "J34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Age Group < 25 yrs"
            },
            {
              deuid: "nW6KgPEVLIt",
              cocuid: "unqbIiA0uir",
              cell_no: "K34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "nW6KgPEVLIt",
              cocuid: "cMLHJtYTW40",
              cell_no: "L34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "nW6KgPEVLIt",
              cocuid: "VioJV8V3lMO",
              cell_no: "M34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "nW6KgPEVLIt",
              cocuid: "MYvkD09xyeq",
              cell_no: "N34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "nW6KgPEVLIt",
              cocuid: "xIJxneZjiWm",
              cell_no: "O34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Age Group > 65 yrs"
            },
            {
              deuid: "JPklATr7DCt",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Place of Birth National Born"
            },
            {
              deuid: "JPklATr7DCt",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "xVfmJLKTvoj",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Place of Training Domestic"
            },
            {
              deuid: "xVfmJLKTvoj",
              cocuid: "GSHgapGzSnl",
              cell_no: "S34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Place of Training Foreign"
            },
            {
              deuid: "xVfmJLKTvoj",
              cocuid: "Ot71GbygcHf",
              cell_no: "T34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Place of Training Unknown"
            },
            {
              deuid: "NC58vY6UBEk",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock Total default"
            },
            {
              deuid: "zpak4f1pJTR",
              cocuid: "drJDZnHzeBH",
              cell_no: "E35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Activity Level Practising"
            },
            {
              deuid: "zpak4f1pJTR",
              cocuid: "VPShWMVpQkb",
              cell_no: "F35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Activity Level Professionally active"
            },
            {
              deuid: "zpak4f1pJTR",
              cocuid: "xcotqxKxwlL",
              cell_no: "G35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "Qf4UX9h7VHw",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Sex Male"
            },
            {
              deuid: "Qf4UX9h7VHw",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Sex Female"
            },
            {
              deuid: "Nb8Gg5ZiX5c",
              cocuid: "StFfGxHbuDF",
              cell_no: "J35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Age Group < 25 yrs"
            },
            {
              deuid: "Nb8Gg5ZiX5c",
              cocuid: "unqbIiA0uir",
              cell_no: "K35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "Nb8Gg5ZiX5c",
              cocuid: "cMLHJtYTW40",
              cell_no: "L35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "Nb8Gg5ZiX5c",
              cocuid: "VioJV8V3lMO",
              cell_no: "M35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "Nb8Gg5ZiX5c",
              cocuid: "MYvkD09xyeq",
              cell_no: "N35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "Nb8Gg5ZiX5c",
              cocuid: "xIJxneZjiWm",
              cell_no: "O35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Age Group > 65 yrs"
            },
            {
              deuid: "L9jYzVsoc9L",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Place of Birth National Born"
            },
            {
              deuid: "L9jYzVsoc9L",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "jLhYGG8YfpL",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Place of Training Domestic"
            },
            {
              deuid: "jLhYGG8YfpL",
              cocuid: "GSHgapGzSnl",
              cell_no: "S35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Place of Training Foreign"
            },
            {
              deuid: "jLhYGG8YfpL",
              cocuid: "Ot71GbygcHf",
              cell_no: "T35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Place of Training Unknown"
            },
            {
              deuid: "Fm2HakleZ27",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D36",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock Total default"
            },
            {
              deuid: "AZCkBzUZgTr",
              cocuid: "drJDZnHzeBH",
              cell_no: "E36",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Activity Level Practising"
            },
            {
              deuid: "AZCkBzUZgTr",
              cocuid: "VPShWMVpQkb",
              cell_no: "F36",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Activity Level Professionally active"
            },
            {
              deuid: "AZCkBzUZgTr",
              cocuid: "xcotqxKxwlL",
              cell_no: "G36",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "TE5sao73qRm",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Sex Male"
            },
            {
              deuid: "TE5sao73qRm",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Sex Female"
            },
            {
              deuid: "qpN0r5UFcPn",
              cocuid: "StFfGxHbuDF",
              cell_no: "J36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Age Group < 25 yrs"
            },
            {
              deuid: "qpN0r5UFcPn",
              cocuid: "unqbIiA0uir",
              cell_no: "K36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "qpN0r5UFcPn",
              cocuid: "cMLHJtYTW40",
              cell_no: "L36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "qpN0r5UFcPn",
              cocuid: "VioJV8V3lMO",
              cell_no: "M36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "qpN0r5UFcPn",
              cocuid: "MYvkD09xyeq",
              cell_no: "N36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "qpN0r5UFcPn",
              cocuid: "xIJxneZjiWm",
              cell_no: "O36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Age Group > 65 yrs"
            },
            {
              deuid: "gLjLQFU5iGR",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Place of Birth National Born"
            },
            {
              deuid: "gLjLQFU5iGR",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "XCsof9AN6rv",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Place of Training Domestic"
            },
            {
              deuid: "XCsof9AN6rv",
              cocuid: "GSHgapGzSnl",
              cell_no: "S36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Place of Training Foreign"
            },
            {
              deuid: "XCsof9AN6rv",
              cocuid: "Ot71GbygcHf",
              cell_no: "T36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Place of Training Unknown"
            },
            {
              deuid: "W1OgOlx2UPS",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock Total default"
            },
            {
              deuid: "ZaQ394eW9pZ",
              cocuid: "drJDZnHzeBH",
              cell_no: "E37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Activity Level Practising"
            },
            {
              deuid: "ZaQ394eW9pZ",
              cocuid: "VPShWMVpQkb",
              cell_no: "F37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "ZaQ394eW9pZ",
              cocuid: "xcotqxKxwlL",
              cell_no: "G37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "WXgZfcbtl5R",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Sex Male"
            },
            {
              deuid: "WXgZfcbtl5R",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Sex Female"
            },
            {
              deuid: "gXsLaaEjWb4",
              cocuid: "StFfGxHbuDF",
              cell_no: "J37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "gXsLaaEjWb4",
              cocuid: "unqbIiA0uir",
              cell_no: "K37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "gXsLaaEjWb4",
              cocuid: "cMLHJtYTW40",
              cell_no: "L37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "gXsLaaEjWb4",
              cocuid: "VioJV8V3lMO",
              cell_no: "M37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "gXsLaaEjWb4",
              cocuid: "MYvkD09xyeq",
              cell_no: "N37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "gXsLaaEjWb4",
              cocuid: "xIJxneZjiWm",
              cell_no: "O37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "LrDRewV80hv",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "LrDRewV80hv",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "U0YDqrjO4sv",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "U0YDqrjO4sv",
              cocuid: "GSHgapGzSnl",
              cell_no: "S37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "U0YDqrjO4sv",
              cocuid: "Ot71GbygcHf",
              cell_no: "T37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "nkvvH6QuQ8t",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock Total default"
            },
            {
              deuid: "KnNekvrEI5f",
              cocuid: "drJDZnHzeBH",
              cell_no: "E38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Activity Level Practising"
            },
            {
              deuid: "KnNekvrEI5f",
              cocuid: "VPShWMVpQkb",
              cell_no: "F38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Activity Level Professionally active"
            },
            {
              deuid: "KnNekvrEI5f",
              cocuid: "xcotqxKxwlL",
              cell_no: "G38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "ksZnJo3iKXT",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Sex Male"
            },
            {
              deuid: "ksZnJo3iKXT",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Sex Female"
            },
            {
              deuid: "HSgxaTyJ0kK",
              cocuid: "StFfGxHbuDF",
              cell_no: "J38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Age Group < 25 yrs"
            },
            {
              deuid: "HSgxaTyJ0kK",
              cocuid: "unqbIiA0uir",
              cell_no: "K38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "HSgxaTyJ0kK",
              cocuid: "cMLHJtYTW40",
              cell_no: "L38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "HSgxaTyJ0kK",
              cocuid: "VioJV8V3lMO",
              cell_no: "M38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "HSgxaTyJ0kK",
              cocuid: "MYvkD09xyeq",
              cell_no: "N38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "HSgxaTyJ0kK",
              cocuid: "xIJxneZjiWm",
              cell_no: "O38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Age Group > 65 yrs"
            },
            {
              deuid: "PmJk7pg8ZH7",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Place of Birth National Born"
            },
            {
              deuid: "PmJk7pg8ZH7",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "u8eW1I03rvW",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Place of Training Domestic"
            },
            {
              deuid: "u8eW1I03rvW",
              cocuid: "GSHgapGzSnl",
              cell_no: "S38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Place of Training Foreign"
            },
            {
              deuid: "u8eW1I03rvW",
              cocuid: "Ot71GbygcHf",
              cell_no: "T38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Place of Training Unknown"
            },
            {
              deuid: "g9WyLxpr1E2",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock Total default"
            },
            {
              deuid: "xY8dqpdkFDy",
              cocuid: "drJDZnHzeBH",
              cell_no: "E39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Activity Level Practising"
            },
            {
              deuid: "xY8dqpdkFDy",
              cocuid: "VPShWMVpQkb",
              cell_no: "F39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "xY8dqpdkFDy",
              cocuid: "xcotqxKxwlL",
              cell_no: "G39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "wichhHKwKBi",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Sex Male"
            },
            {
              deuid: "wichhHKwKBi",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Sex Female"
            },
            {
              deuid: "h7A8N2QpOkV",
              cocuid: "StFfGxHbuDF",
              cell_no: "J39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "h7A8N2QpOkV",
              cocuid: "unqbIiA0uir",
              cell_no: "K39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "h7A8N2QpOkV",
              cocuid: "cMLHJtYTW40",
              cell_no: "L39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "h7A8N2QpOkV",
              cocuid: "VioJV8V3lMO",
              cell_no: "M39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "h7A8N2QpOkV",
              cocuid: "MYvkD09xyeq",
              cell_no: "N39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "h7A8N2QpOkV",
              cocuid: "xIJxneZjiWm",
              cell_no: "O39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "AVOrdyQXSal",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "AVOrdyQXSal",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "o2tDeZ7tB0l",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "o2tDeZ7tB0l",
              cocuid: "GSHgapGzSnl",
              cell_no: "S39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "o2tDeZ7tB0l",
              cocuid: "Ot71GbygcHf",
              cell_no: "T39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "dTCOMljlITC",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock Total default"
            },
            {
              deuid: "ldpEanGgRnU",
              cocuid: "drJDZnHzeBH",
              cell_no: "E40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Activity Level Practising"
            },
            {
              deuid: "ldpEanGgRnU",
              cocuid: "VPShWMVpQkb",
              cell_no: "F40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "ldpEanGgRnU",
              cocuid: "xcotqxKxwlL",
              cell_no: "G40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "WVEV44P6jtl",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Sex Male"
            },
            {
              deuid: "WVEV44P6jtl",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Sex Female"
            },
            {
              deuid: "YLgpCsLXIoM",
              cocuid: "StFfGxHbuDF",
              cell_no: "J40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "YLgpCsLXIoM",
              cocuid: "unqbIiA0uir",
              cell_no: "K40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "YLgpCsLXIoM",
              cocuid: "cMLHJtYTW40",
              cell_no: "L40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "YLgpCsLXIoM",
              cocuid: "VioJV8V3lMO",
              cell_no: "M40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "YLgpCsLXIoM",
              cocuid: "MYvkD09xyeq",
              cell_no: "N40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "YLgpCsLXIoM",
              cocuid: "xIJxneZjiWm",
              cell_no: "O40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "H9tYjJ0nzgU",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "H9tYjJ0nzgU",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "ITHN93Jce9l",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "ITHN93Jce9l",
              cocuid: "GSHgapGzSnl",
              cell_no: "S40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "ITHN93Jce9l",
              cocuid: "Ot71GbygcHf",
              cell_no: "T40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "maFtwxdHWuZ",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D41",
              total: false,
              name: "Community Health Workers Stock Total default"
            },
            {
              deuid: "Lir6kztSRZ7",
              cocuid: "drJDZnHzeBH",
              cell_no: "E41",
              total: false,
              name:
                "Community Health Workers Stock By Activity Level Practising"
            },
            {
              deuid: "Lir6kztSRZ7",
              cocuid: "VPShWMVpQkb",
              cell_no: "F41",
              total: false,
              name:
                "Community Health Workers Stock By Activity Level Professionally active"
            },
            {
              deuid: "Lir6kztSRZ7",
              cocuid: "xcotqxKxwlL",
              cell_no: "G41",
              total: false,
              name:
                "Community Health Workers Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "e32KJz6JDNr",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H41",
              total: false,
              name: "Community Health Workers Stock By Sex Male"
            },
            {
              deuid: "e32KJz6JDNr",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I41",
              total: false,
              name: "Community Health Workers Stock By Sex Female"
            },
            {
              deuid: "wvIYNx8b7rt",
              cocuid: "StFfGxHbuDF",
              cell_no: "J41",
              total: false,
              name: "Community Health Workers Stock By Age Group < 25 yrs"
            },
            {
              deuid: "wvIYNx8b7rt",
              cocuid: "unqbIiA0uir",
              cell_no: "K41",
              total: false,
              name: "Community Health Workers Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "wvIYNx8b7rt",
              cocuid: "cMLHJtYTW40",
              cell_no: "L41",
              total: false,
              name: "Community Health Workers Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "wvIYNx8b7rt",
              cocuid: "VioJV8V3lMO",
              cell_no: "M41",
              total: false,
              name: "Community Health Workers Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "wvIYNx8b7rt",
              cocuid: "MYvkD09xyeq",
              cell_no: "N41",
              total: false,
              name: "Community Health Workers Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "wvIYNx8b7rt",
              cocuid: "xIJxneZjiWm",
              cell_no: "O41",
              total: false,
              name: "Community Health Workers Stock By Age Group > 65 yrs"
            },
            {
              deuid: "C7jmannlc7B",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P41",
              total: false,
              name:
                "Community Health Workers Stock By Place of Birth National Born"
            },
            {
              deuid: "C7jmannlc7B",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q41",
              total: false,
              name:
                "Community Health Workers Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "hd3EEwIBQ9P",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R41",
              total: false,
              name:
                "Community Health Workers Stock By Place of Training Domestic"
            },
            {
              deuid: "hd3EEwIBQ9P",
              cocuid: "GSHgapGzSnl",
              cell_no: "S41",
              total: false,
              name:
                "Community Health Workers Stock By Place of Training Foreign"
            },
            {
              deuid: "hd3EEwIBQ9P",
              cocuid: "Ot71GbygcHf",
              cell_no: "T41",
              total: false,
              name:
                "Community Health Workers Stock By Place of Training Unknown"
            },
            {
              deuid: "TxYXq9qqMJt",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D42",
              total: false,
              name: "Personal care workers Stock Total default"
            },
            {
              deuid: "OAaXg7NvGcx",
              cocuid: "drJDZnHzeBH",
              cell_no: "E42",
              total: false,
              name: "Personal care workers Stock By Activity Level Practising"
            },
            {
              deuid: "OAaXg7NvGcx",
              cocuid: "VPShWMVpQkb",
              cell_no: "F42",
              total: false,
              name:
                "Personal care workers Stock By Activity Level Professionally active"
            },
            {
              deuid: "OAaXg7NvGcx",
              cocuid: "xcotqxKxwlL",
              cell_no: "G42",
              total: false,
              name:
                "Personal care workers Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "nhAPWwIgUCL",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H42",
              total: false,
              name: "Personal care workers Stock By Sex Male"
            },
            {
              deuid: "nhAPWwIgUCL",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I42",
              total: false,
              name: "Personal care workers Stock By Sex Female"
            },
            {
              deuid: "T7KjtN9SenL",
              cocuid: "StFfGxHbuDF",
              cell_no: "J42",
              total: false,
              name: "Personal care workers Stock By Age Group < 25 yrs"
            },
            {
              deuid: "T7KjtN9SenL",
              cocuid: "unqbIiA0uir",
              cell_no: "K42",
              total: false,
              name: "Personal care workers Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "T7KjtN9SenL",
              cocuid: "cMLHJtYTW40",
              cell_no: "L42",
              total: false,
              name: "Personal care workers Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "T7KjtN9SenL",
              cocuid: "VioJV8V3lMO",
              cell_no: "M42",
              total: false,
              name: "Personal care workers Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "T7KjtN9SenL",
              cocuid: "MYvkD09xyeq",
              cell_no: "N42",
              total: false,
              name: "Personal care workers Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "T7KjtN9SenL",
              cocuid: "xIJxneZjiWm",
              cell_no: "O42",
              total: false,
              name: "Personal care workers Stock By Age Group > 65 yrs"
            },
            {
              deuid: "sRfhRRpv2rH",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P42",
              total: false,
              name:
                "Personal care workers Stock By Place of Birth National Born"
            },
            {
              deuid: "sRfhRRpv2rH",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q42",
              total: false,
              name: "Personal care workers Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "G4NTIrtM8sA",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R42",
              total: false,
              name: "Personal care workers Stock By Place of Training Domestic"
            },
            {
              deuid: "G4NTIrtM8sA",
              cocuid: "GSHgapGzSnl",
              cell_no: "S42",
              total: false,
              name: "Personal care workers Stock By Place of Training Foreign"
            },
            {
              deuid: "G4NTIrtM8sA",
              cocuid: "Ot71GbygcHf",
              cell_no: "T42",
              total: false,
              name: "Personal care workers Stock By Place of Training Unknown"
            },
            {
              deuid: "UN1GGvFlETF",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D43",
              total: false,
              name: "Health Care Assistants Stock Total default"
            },
            {
              deuid: "JQL0onXq6ge",
              cocuid: "drJDZnHzeBH",
              cell_no: "E43",
              total: false,
              name: "Health Care Assistants Stock By Activity Level Practising"
            },
            {
              deuid: "JQL0onXq6ge",
              cocuid: "VPShWMVpQkb",
              cell_no: "F43",
              total: false,
              name:
                "Health Care Assistants Stock By Activity Level Professionally active"
            },
            {
              deuid: "JQL0onXq6ge",
              cocuid: "xcotqxKxwlL",
              cell_no: "G43",
              total: false,
              name:
                "Health Care Assistants Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "FA3nDd4psmk",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H43",
              total: false,
              name: "Health Care Assistants Stock By Sex Male"
            },
            {
              deuid: "FA3nDd4psmk",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I43",
              total: false,
              name: "Health Care Assistants Stock By Sex Female"
            },
            {
              deuid: "CVhecwG7dZH",
              cocuid: "StFfGxHbuDF",
              cell_no: "J43",
              total: false,
              name: "Health Care Assistants Stock By Age Group < 25 yrs"
            },
            {
              deuid: "CVhecwG7dZH",
              cocuid: "unqbIiA0uir",
              cell_no: "K43",
              total: false,
              name: "Health Care Assistants Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "CVhecwG7dZH",
              cocuid: "cMLHJtYTW40",
              cell_no: "L43",
              total: false,
              name: "Health Care Assistants Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "CVhecwG7dZH",
              cocuid: "VioJV8V3lMO",
              cell_no: "M43",
              total: false,
              name: "Health Care Assistants Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "CVhecwG7dZH",
              cocuid: "MYvkD09xyeq",
              cell_no: "N43",
              total: false,
              name: "Health Care Assistants Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "CVhecwG7dZH",
              cocuid: "xIJxneZjiWm",
              cell_no: "O43",
              total: false,
              name: "Health Care Assistants Stock By Age Group > 65 yrs"
            },
            {
              deuid: "C1oMSkmD5am",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P43",
              total: false,
              name:
                "Health Care Assistants Stock By Place of Birth National Born"
            },
            {
              deuid: "C1oMSkmD5am",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q43",
              total: false,
              name:
                "Health Care Assistants Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "KHgbn4zfgrB",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R43",
              total: false,
              name: "Health Care Assistants Stock By Place of Training Domestic"
            },
            {
              deuid: "KHgbn4zfgrB",
              cocuid: "GSHgapGzSnl",
              cell_no: "S43",
              total: false,
              name: "Health Care Assistants Stock By Place of Training Foreign"
            },
            {
              deuid: "KHgbn4zfgrB",
              cocuid: "Ot71GbygcHf",
              cell_no: "T43",
              total: false,
              name: "Health Care Assistants Stock By Place of Training Unknown"
            },
            {
              deuid: "m5NFJ1IxYaq",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D44",
              total: false,
              name: "Home-based Personal Care Workers Stock Total default"
            },
            {
              deuid: "pOUpImrRlyS",
              cocuid: "drJDZnHzeBH",
              cell_no: "E44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Activity Level Practising"
            },
            {
              deuid: "pOUpImrRlyS",
              cocuid: "VPShWMVpQkb",
              cell_no: "F44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Activity Level Professionally active"
            },
            {
              deuid: "pOUpImrRlyS",
              cocuid: "xcotqxKxwlL",
              cell_no: "G44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "f75GbjjbQo6",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H44",
              total: false,
              name: "Home-based Personal Care Workers Stock By Sex Male"
            },
            {
              deuid: "f75GbjjbQo6",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I44",
              total: false,
              name: "Home-based Personal Care Workers Stock By Sex Female"
            },
            {
              deuid: "XCSnh8ISj81",
              cocuid: "StFfGxHbuDF",
              cell_no: "J44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Age Group < 25 yrs"
            },
            {
              deuid: "XCSnh8ISj81",
              cocuid: "unqbIiA0uir",
              cell_no: "K44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "XCSnh8ISj81",
              cocuid: "cMLHJtYTW40",
              cell_no: "L44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "XCSnh8ISj81",
              cocuid: "VioJV8V3lMO",
              cell_no: "M44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "XCSnh8ISj81",
              cocuid: "MYvkD09xyeq",
              cell_no: "N44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "XCSnh8ISj81",
              cocuid: "xIJxneZjiWm",
              cell_no: "O44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Age Group > 65 yrs"
            },
            {
              deuid: "JBCKANhdTX4",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Place of Birth National Born"
            },
            {
              deuid: "JBCKANhdTX4",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "mNiSSk0Sfgz",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Place of Training Domestic"
            },
            {
              deuid: "mNiSSk0Sfgz",
              cocuid: "GSHgapGzSnl",
              cell_no: "S44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Place of Training Foreign"
            },
            {
              deuid: "mNiSSk0Sfgz",
              cocuid: "Ot71GbygcHf",
              cell_no: "T44",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Place of Training Unknown"
            },
            {
              deuid: "It06Qq2EzsF",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock Total default"
            },
            {
              deuid: "MNblETb62a7",
              cocuid: "drJDZnHzeBH",
              cell_no: "E45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Activity Level Practising"
            },
            {
              deuid: "MNblETb62a7",
              cocuid: "VPShWMVpQkb",
              cell_no: "F45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Activity Level Professionally active"
            },
            {
              deuid: "MNblETb62a7",
              cocuid: "xcotqxKxwlL",
              cell_no: "G45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "aotiqu4EAWq",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Sex Male"
            },
            {
              deuid: "aotiqu4EAWq",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Sex Female"
            },
            {
              deuid: "MxK9mbc2OMv",
              cocuid: "StFfGxHbuDF",
              cell_no: "J45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Age Group < 25 yrs"
            },
            {
              deuid: "MxK9mbc2OMv",
              cocuid: "unqbIiA0uir",
              cell_no: "K45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "MxK9mbc2OMv",
              cocuid: "cMLHJtYTW40",
              cell_no: "L45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "MxK9mbc2OMv",
              cocuid: "VioJV8V3lMO",
              cell_no: "M45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "MxK9mbc2OMv",
              cocuid: "MYvkD09xyeq",
              cell_no: "N45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "MxK9mbc2OMv",
              cocuid: "xIJxneZjiWm",
              cell_no: "O45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Age Group > 65 yrs"
            },
            {
              deuid: "ez5XnYzGvay",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Place of Birth National Born"
            },
            {
              deuid: "ez5XnYzGvay",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "RZezdwRO5a8",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Place of Training Domestic"
            },
            {
              deuid: "RZezdwRO5a8",
              cocuid: "GSHgapGzSnl",
              cell_no: "S45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Place of Training Foreign"
            },
            {
              deuid: "RZezdwRO5a8",
              cocuid: "Ot71GbygcHf",
              cell_no: "T45",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Place of Training Unknown"
            },
            {
              deuid: "cg1DEEIeZ9N",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D46",
              total: false,
              name: "Physiotherapists Stock Total default"
            },
            {
              deuid: "weJ3sYiNE8D",
              cocuid: "drJDZnHzeBH",
              cell_no: "E46",
              total: false,
              name: "Physiotherapists Stock By Activity Level Practising"
            },
            {
              deuid: "weJ3sYiNE8D",
              cocuid: "VPShWMVpQkb",
              cell_no: "F46",
              total: false,
              name:
                "Physiotherapists Stock By Activity Level Professionally active"
            },
            {
              deuid: "weJ3sYiNE8D",
              cocuid: "xcotqxKxwlL",
              cell_no: "G46",
              total: false,
              name:
                "Physiotherapists Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "Gi5YLztjtyB",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H46",
              total: false,
              name: "Physiotherapists Stock By Sex Male"
            },
            {
              deuid: "Gi5YLztjtyB",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I46",
              total: false,
              name: "Physiotherapists Stock By Sex Female"
            },
            {
              deuid: "zv4Jk259Ks7",
              cocuid: "StFfGxHbuDF",
              cell_no: "J46",
              total: false,
              name: "Physiotherapists Stock By Age Group < 25 yrs"
            },
            {
              deuid: "zv4Jk259Ks7",
              cocuid: "unqbIiA0uir",
              cell_no: "K46",
              total: false,
              name: "Physiotherapists Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "zv4Jk259Ks7",
              cocuid: "cMLHJtYTW40",
              cell_no: "L46",
              total: false,
              name: "Physiotherapists Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "zv4Jk259Ks7",
              cocuid: "VioJV8V3lMO",
              cell_no: "M46",
              total: false,
              name: "Physiotherapists Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "zv4Jk259Ks7",
              cocuid: "MYvkD09xyeq",
              cell_no: "N46",
              total: false,
              name: "Physiotherapists Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "zv4Jk259Ks7",
              cocuid: "xIJxneZjiWm",
              cell_no: "O46",
              total: false,
              name: "Physiotherapists Stock By Age Group > 65 yrs"
            },
            {
              deuid: "hTgpqkx2MAb",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P46",
              total: false,
              name: "Physiotherapists Stock By Place of Birth National Born"
            },
            {
              deuid: "hTgpqkx2MAb",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q46",
              total: false,
              name: "Physiotherapists Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "RLUq9bhLRJW",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R46",
              total: false,
              name: "Physiotherapists Stock By Place of Training Domestic"
            },
            {
              deuid: "RLUq9bhLRJW",
              cocuid: "GSHgapGzSnl",
              cell_no: "S46",
              total: false,
              name: "Physiotherapists Stock By Place of Training Foreign"
            },
            {
              deuid: "RLUq9bhLRJW",
              cocuid: "Ot71GbygcHf",
              cell_no: "T46",
              total: false,
              name: "Physiotherapists Stock By Place of Training Unknown"
            },
            {
              deuid: "zs2x5LAeI3t",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock Total default"
            },
            {
              deuid: "rBKkHNAdzhB",
              cocuid: "drJDZnHzeBH",
              cell_no: "E47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Activity Level Practising"
            },
            {
              deuid: "rBKkHNAdzhB",
              cocuid: "VPShWMVpQkb",
              cell_no: "F47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Activity Level Professionally active"
            },
            {
              deuid: "rBKkHNAdzhB",
              cocuid: "xcotqxKxwlL",
              cell_no: "G47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "fmNedNy1Dz4",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H47",
              total: false,
              name: "Physiotherapy Technicians and Assistants Stock By Sex Male"
            },
            {
              deuid: "fmNedNy1Dz4",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Sex Female"
            },
            {
              deuid: "QQIXTkQuD9z",
              cocuid: "StFfGxHbuDF",
              cell_no: "J47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Age Group < 25 yrs"
            },
            {
              deuid: "QQIXTkQuD9z",
              cocuid: "unqbIiA0uir",
              cell_no: "K47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "QQIXTkQuD9z",
              cocuid: "cMLHJtYTW40",
              cell_no: "L47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "QQIXTkQuD9z",
              cocuid: "VioJV8V3lMO",
              cell_no: "M47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "QQIXTkQuD9z",
              cocuid: "MYvkD09xyeq",
              cell_no: "N47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "QQIXTkQuD9z",
              cocuid: "xIJxneZjiWm",
              cell_no: "O47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Age Group > 65 yrs"
            },
            {
              deuid: "EIh0f0A4G1N",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Place of Birth National Born"
            },
            {
              deuid: "EIh0f0A4G1N",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "dm67bKt2Veu",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Place of Training Domestic"
            },
            {
              deuid: "dm67bKt2Veu",
              cocuid: "GSHgapGzSnl",
              cell_no: "S47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Place of Training Foreign"
            },
            {
              deuid: "dm67bKt2Veu",
              cocuid: "Ot71GbygcHf",
              cell_no: "T47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Place of Training Unknown"
            },
            {
              deuid: "fqPqYs1WW22",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D48",
              total: false,
              name: "Dieticians Stock Total default"
            },
            {
              deuid: "tejOvb3YNOT",
              cocuid: "drJDZnHzeBH",
              cell_no: "E48",
              total: false,
              name: "Dieticians  Stock By Activity Level Practising"
            },
            {
              deuid: "tejOvb3YNOT",
              cocuid: "VPShWMVpQkb",
              cell_no: "F48",
              total: false,
              name: "Dieticians  Stock By Activity Level Professionally active"
            },
            {
              deuid: "tejOvb3YNOT",
              cocuid: "xcotqxKxwlL",
              cell_no: "G48",
              total: false,
              name: "Dieticians  Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "ptLuUHEellT",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H48",
              total: false,
              name: "Dieticians  Stock By Sex Male"
            },
            {
              deuid: "ptLuUHEellT",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I48",
              total: false,
              name: "Dieticians  Stock By Sex Female"
            },
            {
              deuid: "mSHa8SypYaJ",
              cocuid: "StFfGxHbuDF",
              cell_no: "J48",
              total: false,
              name: "Dieticians  Stock By Age Group < 25 yrs"
            },
            {
              deuid: "mSHa8SypYaJ",
              cocuid: "unqbIiA0uir",
              cell_no: "K48",
              total: false,
              name: "Dieticians  Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "mSHa8SypYaJ",
              cocuid: "cMLHJtYTW40",
              cell_no: "L48",
              total: false,
              name: "Dieticians  Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "mSHa8SypYaJ",
              cocuid: "VioJV8V3lMO",
              cell_no: "M48",
              total: false,
              name: "Dieticians  Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "mSHa8SypYaJ",
              cocuid: "MYvkD09xyeq",
              cell_no: "N48",
              total: false,
              name: "Dieticians  Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "mSHa8SypYaJ",
              cocuid: "xIJxneZjiWm",
              cell_no: "O48",
              total: false,
              name: "Dieticians  Stock By Age Group > 65 yrs"
            },
            {
              deuid: "IT332UM0Eyd",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P48",
              total: false,
              name: "Dieticians  Stock By Place of Birth National Born"
            },
            {
              deuid: "IT332UM0Eyd",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q48",
              total: false,
              name: "Dieticians  Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "uQaaJtnfFWM",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R48",
              total: false,
              name: "Dieticians  Stock By Place of Training Domestic"
            },
            {
              deuid: "uQaaJtnfFWM",
              cocuid: "GSHgapGzSnl",
              cell_no: "S48",
              total: false,
              name: "Dieticians  Stock By Place of Training Foreign"
            },
            {
              deuid: "uQaaJtnfFWM",
              cocuid: "Ot71GbygcHf",
              cell_no: "T48",
              total: false,
              name: "Dieticians  Stock By Place of Training Unknown"
            },
            {
              deuid: "GKnY5V4PkhM",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D49",
              total: false,
              name: "Nutritionists Stock Total default"
            },
            {
              deuid: "T10hGZHcK7q",
              cocuid: "drJDZnHzeBH",
              cell_no: "E49",
              total: false,
              name: "Nutritionists Stock By Activity Level Practising"
            },
            {
              deuid: "T10hGZHcK7q",
              cocuid: "VPShWMVpQkb",
              cell_no: "F49",
              total: false,
              name:
                "Nutritionists Stock By Activity Level Professionally active"
            },
            {
              deuid: "T10hGZHcK7q",
              cocuid: "xcotqxKxwlL",
              cell_no: "G49",
              total: false,
              name: "Nutritionists Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "goxjwhLBh98",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H49",
              total: false,
              name: "Nutritionists Stock By Sex Male"
            },
            {
              deuid: "goxjwhLBh98",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I49",
              total: false,
              name: "Nutritionists Stock By Sex Female"
            },
            {
              deuid: "yWUBDj8Vyha",
              cocuid: "StFfGxHbuDF",
              cell_no: "J49",
              total: false,
              name: "Nutritionists Stock By Age Group < 25 yrs"
            },
            {
              deuid: "yWUBDj8Vyha",
              cocuid: "unqbIiA0uir",
              cell_no: "K49",
              total: false,
              name: "Nutritionists Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "yWUBDj8Vyha",
              cocuid: "cMLHJtYTW40",
              cell_no: "L49",
              total: false,
              name: "Nutritionists Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "yWUBDj8Vyha",
              cocuid: "VioJV8V3lMO",
              cell_no: "M49",
              total: false,
              name: "Nutritionists Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "yWUBDj8Vyha",
              cocuid: "MYvkD09xyeq",
              cell_no: "N49",
              total: false,
              name: "Nutritionists Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "yWUBDj8Vyha",
              cocuid: "xIJxneZjiWm",
              cell_no: "O49",
              total: false,
              name: "Nutritionists Stock By Age Group > 65 yrs"
            },
            {
              deuid: "s10VCchdlnY",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P49",
              total: false,
              name: "Nutritionists Stock By Place of Birth National Born"
            },
            {
              deuid: "s10VCchdlnY",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q49",
              total: false,
              name: "Nutritionists Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "FXGfkCMrBqo",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R49",
              total: false,
              name: "Nutritionists Stock By Place of Training Domestic"
            },
            {
              deuid: "FXGfkCMrBqo",
              cocuid: "GSHgapGzSnl",
              cell_no: "S49",
              total: false,
              name: "Nutritionists Stock By Place of Training Foreign"
            },
            {
              deuid: "FXGfkCMrBqo",
              cocuid: "Ot71GbygcHf",
              cell_no: "T49",
              total: false,
              name: "Nutritionists Stock By Place of Training Unknown"
            },
            {
              deuid: "sbIyFRN4j0N",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D50",
              total: false,
              name: "Audiologists and Speech Therapists Stock Total default"
            },
            {
              deuid: "LaQe20TdHvH",
              cocuid: "drJDZnHzeBH",
              cell_no: "E50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Activity Level Practising"
            },
            {
              deuid: "LaQe20TdHvH",
              cocuid: "VPShWMVpQkb",
              cell_no: "F50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Activity Level Professionally active"
            },
            {
              deuid: "LaQe20TdHvH",
              cocuid: "xcotqxKxwlL",
              cell_no: "G50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "sW496bvfky8",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H50",
              total: false,
              name: "Audiologists and Speech Therapists Stock By Sex Male"
            },
            {
              deuid: "sW496bvfky8",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I50",
              total: false,
              name: "Audiologists and Speech Therapists Stock By Sex Female"
            },
            {
              deuid: "tkCXuIKxKvK",
              cocuid: "StFfGxHbuDF",
              cell_no: "J50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Age Group < 25 yrs"
            },
            {
              deuid: "tkCXuIKxKvK",
              cocuid: "unqbIiA0uir",
              cell_no: "K50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "tkCXuIKxKvK",
              cocuid: "cMLHJtYTW40",
              cell_no: "L50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "tkCXuIKxKvK",
              cocuid: "VioJV8V3lMO",
              cell_no: "M50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "tkCXuIKxKvK",
              cocuid: "MYvkD09xyeq",
              cell_no: "N50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "tkCXuIKxKvK",
              cocuid: "xIJxneZjiWm",
              cell_no: "O50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Age Group > 65 yrs"
            },
            {
              deuid: "P6Si86K02do",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Place of Birth National Born"
            },
            {
              deuid: "P6Si86K02do",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "ZzxjmR8ys0i",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Place of Training Domestic"
            },
            {
              deuid: "ZzxjmR8ys0i",
              cocuid: "GSHgapGzSnl",
              cell_no: "S50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Place of Training Foreign"
            },
            {
              deuid: "ZzxjmR8ys0i",
              cocuid: "Ot71GbygcHf",
              cell_no: "T50",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Place of Training Unknown"
            },
            {
              deuid: "vDp3u0DJlrK",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D51",
              total: false,
              name: "Optometrists and Ophthalmic Opticians Stock Total default"
            },
            {
              deuid: "Y0Al3lbaiSd",
              cocuid: "drJDZnHzeBH",
              cell_no: "E51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Activity Level Practising"
            },
            {
              deuid: "Y0Al3lbaiSd",
              cocuid: "VPShWMVpQkb",
              cell_no: "F51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Activity Level Professionally active"
            },
            {
              deuid: "Y0Al3lbaiSd",
              cocuid: "xcotqxKxwlL",
              cell_no: "G51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "vCaW1uucv0A",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H51",
              total: false,
              name: "Optometrists and Ophthalmic Opticians Stock By Sex Male"
            },
            {
              deuid: "vCaW1uucv0A",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I51",
              total: false,
              name: "Optometrists and Ophthalmic Opticians Stock By Sex Female"
            },
            {
              deuid: "loSyLnRwwBi",
              cocuid: "StFfGxHbuDF",
              cell_no: "J51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Age Group < 25 yrs"
            },
            {
              deuid: "loSyLnRwwBi",
              cocuid: "unqbIiA0uir",
              cell_no: "K51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "loSyLnRwwBi",
              cocuid: "cMLHJtYTW40",
              cell_no: "L51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "loSyLnRwwBi",
              cocuid: "VioJV8V3lMO",
              cell_no: "M51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "loSyLnRwwBi",
              cocuid: "MYvkD09xyeq",
              cell_no: "N51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "loSyLnRwwBi",
              cocuid: "xIJxneZjiWm",
              cell_no: "O51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Age Group > 65 yrs"
            },
            {
              deuid: "wSbrjoq0URr",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Place of Birth National Born"
            },
            {
              deuid: "wSbrjoq0URr",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "wTnjwDdCIrS",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Place of Training Domestic"
            },
            {
              deuid: "wTnjwDdCIrS",
              cocuid: "GSHgapGzSnl",
              cell_no: "S51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Place of Training Foreign"
            },
            {
              deuid: "wTnjwDdCIrS",
              cocuid: "Ot71GbygcHf",
              cell_no: "T51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Place of Training Unknown"
            },
            {
              deuid: "Tu64Vt7gv8M",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D52",
              total: false,
              name: "Dispensing Opticians Stock Total default"
            },
            {
              deuid: "GJUbT5P29ol",
              cocuid: "drJDZnHzeBH",
              cell_no: "E52",
              total: false,
              name: "Dispensing Opticians Stock By Activity Level Practising"
            },
            {
              deuid: "GJUbT5P29ol",
              cocuid: "VPShWMVpQkb",
              cell_no: "F52",
              total: false,
              name:
                "Dispensing Opticians Stock By Activity Level Professionally active"
            },
            {
              deuid: "GJUbT5P29ol",
              cocuid: "xcotqxKxwlL",
              cell_no: "G52",
              total: false,
              name:
                "Dispensing Opticians Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "ry2NWNkjLq3",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H52",
              total: false,
              name: "Dispensing Opticians Stock By Sex Male"
            },
            {
              deuid: "ry2NWNkjLq3",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I52",
              total: false,
              name: "Dispensing Opticians Stock By Sex Female"
            },
            {
              deuid: "M0jk7fncrWU",
              cocuid: "StFfGxHbuDF",
              cell_no: "J52",
              total: false,
              name: "Dispensing Opticians Stock By Age Group < 25 yrs"
            },
            {
              deuid: "M0jk7fncrWU",
              cocuid: "unqbIiA0uir",
              cell_no: "K52",
              total: false,
              name: "Dispensing Opticians Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "M0jk7fncrWU",
              cocuid: "cMLHJtYTW40",
              cell_no: "L52",
              total: false,
              name: "Dispensing Opticians Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "M0jk7fncrWU",
              cocuid: "VioJV8V3lMO",
              cell_no: "M52",
              total: false,
              name: "Dispensing Opticians Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "M0jk7fncrWU",
              cocuid: "MYvkD09xyeq",
              cell_no: "N52",
              total: false,
              name: "Dispensing Opticians Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "M0jk7fncrWU",
              cocuid: "xIJxneZjiWm",
              cell_no: "O52",
              total: false,
              name: "Dispensing Opticians Stock By Age Group > 65 yrs"
            },
            {
              deuid: "OpJzru7UHuG",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P52",
              total: false,
              name: "Dispensing Opticians Stock By Place of Birth National Born"
            },
            {
              deuid: "OpJzru7UHuG",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q52",
              total: false,
              name: "Dispensing Opticians Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "EHRN1PJaEfH",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R52",
              total: false,
              name: "Dispensing Opticians Stock By Place of Training Domestic"
            },
            {
              deuid: "EHRN1PJaEfH",
              cocuid: "GSHgapGzSnl",
              cell_no: "S52",
              total: false,
              name: "Dispensing Opticians Stock By Place of Training Foreign"
            },
            {
              deuid: "EHRN1PJaEfH",
              cocuid: "Ot71GbygcHf",
              cell_no: "T52",
              total: false,
              name: "Dispensing Opticians Stock By Place of Training Unknown"
            },
            {
              deuid: "yKNKfokBA9x",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D53",
              total: false,
              name: "Medical Prosthetic Technicians Stock Total default"
            },
            {
              deuid: "TTQ6WgBHZUZ",
              cocuid: "drJDZnHzeBH",
              cell_no: "E53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Activity Level Practising"
            },
            {
              deuid: "TTQ6WgBHZUZ",
              cocuid: "VPShWMVpQkb",
              cell_no: "F53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Activity Level Professionally active"
            },
            {
              deuid: "TTQ6WgBHZUZ",
              cocuid: "xcotqxKxwlL",
              cell_no: "G53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "jBu0lozRMGR",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H53",
              total: false,
              name: "Medical Prosthetic Technicians Stock By Sex Male"
            },
            {
              deuid: "jBu0lozRMGR",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I53",
              total: false,
              name: "Medical Prosthetic Technicians Stock By Sex Female"
            },
            {
              deuid: "Dzsq1pwIHqF",
              cocuid: "StFfGxHbuDF",
              cell_no: "J53",
              total: false,
              name: "Medical Prosthetic Technicians Stock By Age Group < 25 yrs"
            },
            {
              deuid: "Dzsq1pwIHqF",
              cocuid: "unqbIiA0uir",
              cell_no: "K53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "Dzsq1pwIHqF",
              cocuid: "cMLHJtYTW40",
              cell_no: "L53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "Dzsq1pwIHqF",
              cocuid: "VioJV8V3lMO",
              cell_no: "M53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "Dzsq1pwIHqF",
              cocuid: "MYvkD09xyeq",
              cell_no: "N53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "Dzsq1pwIHqF",
              cocuid: "xIJxneZjiWm",
              cell_no: "O53",
              total: false,
              name: "Medical Prosthetic Technicians Stock By Age Group > 65 yrs"
            },
            {
              deuid: "NxQueFeUfa3",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Place of Birth National Born"
            },
            {
              deuid: "NxQueFeUfa3",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "KLbSi3CJxSo",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Place of Training Domestic"
            },
            {
              deuid: "KLbSi3CJxSo",
              cocuid: "GSHgapGzSnl",
              cell_no: "S53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Place of Training Foreign"
            },
            {
              deuid: "KLbSi3CJxSo",
              cocuid: "Ot71GbygcHf",
              cell_no: "T53",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Place of Training Unknown"
            },
            {
              deuid: "dYKAIYSnLue",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock Total default"
            },
            {
              deuid: "qiy19S7ih95",
              cocuid: "drJDZnHzeBH",
              cell_no: "E54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Activity Level Practising"
            },
            {
              deuid: "qiy19S7ih95",
              cocuid: "VPShWMVpQkb",
              cell_no: "F54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Activity Level Professionally active"
            },
            {
              deuid: "qiy19S7ih95",
              cocuid: "xcotqxKxwlL",
              cell_no: "G54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "H68Cr5CXfUE",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Sex Male"
            },
            {
              deuid: "H68Cr5CXfUE",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Sex Female"
            },
            {
              deuid: "sn72zXVjAF8",
              cocuid: "StFfGxHbuDF",
              cell_no: "J54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Age Group < 25 yrs"
            },
            {
              deuid: "sn72zXVjAF8",
              cocuid: "unqbIiA0uir",
              cell_no: "K54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "sn72zXVjAF8",
              cocuid: "cMLHJtYTW40",
              cell_no: "L54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "sn72zXVjAF8",
              cocuid: "VioJV8V3lMO",
              cell_no: "M54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "sn72zXVjAF8",
              cocuid: "MYvkD09xyeq",
              cell_no: "N54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "sn72zXVjAF8",
              cocuid: "xIJxneZjiWm",
              cell_no: "O54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Age Group > 65 yrs"
            },
            {
              deuid: "Qy71EkOy7om",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Place of Birth National Born"
            },
            {
              deuid: "Qy71EkOy7om",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "jnfm7mwyTcb",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Place of Training Domestic"
            },
            {
              deuid: "jnfm7mwyTcb",
              cocuid: "GSHgapGzSnl",
              cell_no: "S54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Place of Training Foreign"
            },
            {
              deuid: "jnfm7mwyTcb",
              cocuid: "Ot71GbygcHf",
              cell_no: "T54",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Place of Training Unknown"
            },
            {
              deuid: "dvNINMJZS3V",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D55",
              total: false,
              name: "Medical Assistants Stock Total default"
            },
            {
              deuid: "h7OW3TrJ61e",
              cocuid: "drJDZnHzeBH",
              cell_no: "E55",
              total: false,
              name: "Medical Assistants Stock By Activity Level Practising"
            },
            {
              deuid: "h7OW3TrJ61e",
              cocuid: "VPShWMVpQkb",
              cell_no: "F55",
              total: false,
              name:
                "Medical Assistants Stock By Activity Level Professionally active"
            },
            {
              deuid: "h7OW3TrJ61e",
              cocuid: "xcotqxKxwlL",
              cell_no: "G55",
              total: false,
              name:
                "Medical Assistants Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "cukiq4gvnKu",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H55",
              total: false,
              name: "Medical Assistants Stock By Sex Male"
            },
            {
              deuid: "cukiq4gvnKu",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I55",
              total: false,
              name: "Medical Assistants Stock By Sex Female"
            },
            {
              deuid: "fUCZtV4BiIH",
              cocuid: "StFfGxHbuDF",
              cell_no: "J55",
              total: false,
              name: "Medical Assistants Stock By Age Group < 25 yrs"
            },
            {
              deuid: "fUCZtV4BiIH",
              cocuid: "unqbIiA0uir",
              cell_no: "K55",
              total: false,
              name: "Medical Assistants Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "fUCZtV4BiIH",
              cocuid: "cMLHJtYTW40",
              cell_no: "L55",
              total: false,
              name: "Medical Assistants Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "fUCZtV4BiIH",
              cocuid: "VioJV8V3lMO",
              cell_no: "M55",
              total: false,
              name: "Medical Assistants Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "fUCZtV4BiIH",
              cocuid: "MYvkD09xyeq",
              cell_no: "N55",
              total: false,
              name: "Medical Assistants Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "fUCZtV4BiIH",
              cocuid: "xIJxneZjiWm",
              cell_no: "O55",
              total: false,
              name: "Medical Assistants Stock By Age Group > 65 yrs"
            },
            {
              deuid: "klIqXXMQ1AF",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P55",
              total: false,
              name: "Medical Assistants Stock By Place of Birth National Born"
            },
            {
              deuid: "klIqXXMQ1AF",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q55",
              total: false,
              name: "Medical Assistants Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "ERAgsIEBM5o",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R55",
              total: false,
              name: "Medical Assistants Stock By Place of Training Domestic"
            },
            {
              deuid: "ERAgsIEBM5o",
              cocuid: "GSHgapGzSnl",
              cell_no: "S55",
              total: false,
              name: "Medical Assistants Stock By Place of Training Foreign"
            },
            {
              deuid: "ERAgsIEBM5o",
              cocuid: "Ot71GbygcHf",
              cell_no: "T55",
              total: false,
              name: "Medical Assistants Stock By Place of Training Unknown"
            },
            {
              deuid: "qr8RGsOOdXn",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D56",
              total: false,
              name: "Ambulance Workers Stock Total default"
            },
            {
              deuid: "gWxbpG09atk",
              cocuid: "drJDZnHzeBH",
              cell_no: "E56",
              total: false,
              name: "Ambulance Workers Stock By Activity Level Practising"
            },
            {
              deuid: "gWxbpG09atk",
              cocuid: "VPShWMVpQkb",
              cell_no: "F56",
              total: false,
              name:
                "Ambulance Workers Stock By Activity Level Professionally active"
            },
            {
              deuid: "gWxbpG09atk",
              cocuid: "xcotqxKxwlL",
              cell_no: "G56",
              total: false,
              name:
                "Ambulance Workers Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "yoh1AojJqBm",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H56",
              total: false,
              name: "Ambulance Workers Stock By Sex Male"
            },
            {
              deuid: "yoh1AojJqBm",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I56",
              total: false,
              name: "Ambulance Workers Stock By Sex Female"
            },
            {
              deuid: "Psx8w32IjKA",
              cocuid: "StFfGxHbuDF",
              cell_no: "J56",
              total: false,
              name: "Ambulance Workers Stock By Age Group < 25 yrs"
            },
            {
              deuid: "Psx8w32IjKA",
              cocuid: "unqbIiA0uir",
              cell_no: "K56",
              total: false,
              name: "Ambulance Workers Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "Psx8w32IjKA",
              cocuid: "cMLHJtYTW40",
              cell_no: "L56",
              total: false,
              name: "Ambulance Workers Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "Psx8w32IjKA",
              cocuid: "VioJV8V3lMO",
              cell_no: "M56",
              total: false,
              name: "Ambulance Workers Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "Psx8w32IjKA",
              cocuid: "MYvkD09xyeq",
              cell_no: "N56",
              total: false,
              name: "Ambulance Workers Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "Psx8w32IjKA",
              cocuid: "xIJxneZjiWm",
              cell_no: "O56",
              total: false,
              name: "Ambulance Workers Stock By Age Group > 65 yrs"
            },
            {
              deuid: "wp6tV9if1us",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P56",
              total: false,
              name: "Ambulance Workers Stock By Place of Birth National Born"
            },
            {
              deuid: "wp6tV9if1us",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q56",
              total: false,
              name: "Ambulance Workers Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "nlUAhvWIgOU",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R56",
              total: false,
              name: "Ambulance Workers Stock By Place of Training Domestic"
            },
            {
              deuid: "nlUAhvWIgOU",
              cocuid: "GSHgapGzSnl",
              cell_no: "S56",
              total: false,
              name: "Ambulance Workers Stock By Place of Training Foreign"
            },
            {
              deuid: "nlUAhvWIgOU",
              cocuid: "Ot71GbygcHf",
              cell_no: "T56",
              total: false,
              name: "Ambulance Workers Stock By Place of Training Unknown"
            },
            {
              deuid: "uzy03WEvMkk",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D57",
              total: false,
              name:
                "Social work and counselling professionals Stock Total default"
            },
            {
              deuid: "vTu1WOspiNq",
              cocuid: "drJDZnHzeBH",
              cell_no: "E57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Activity Level Practising"
            },
            {
              deuid: "vTu1WOspiNq",
              cocuid: "VPShWMVpQkb",
              cell_no: "F57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "vTu1WOspiNq",
              cocuid: "xcotqxKxwlL",
              cell_no: "G57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "F8ml1qKvZIY",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Sex Male"
            },
            {
              deuid: "F8ml1qKvZIY",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Sex Female"
            },
            {
              deuid: "TTWJ58v2frD",
              cocuid: "StFfGxHbuDF",
              cell_no: "J57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "TTWJ58v2frD",
              cocuid: "unqbIiA0uir",
              cell_no: "K57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "TTWJ58v2frD",
              cocuid: "cMLHJtYTW40",
              cell_no: "L57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "TTWJ58v2frD",
              cocuid: "VioJV8V3lMO",
              cell_no: "M57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "TTWJ58v2frD",
              cocuid: "MYvkD09xyeq",
              cell_no: "N57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "TTWJ58v2frD",
              cocuid: "xIJxneZjiWm",
              cell_no: "O57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "MRM0ZIZFfVP",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "MRM0ZIZFfVP",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "YFD6ZCWbKXZ",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "YFD6ZCWbKXZ",
              cocuid: "GSHgapGzSnl",
              cell_no: "S57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "YFD6ZCWbKXZ",
              cocuid: "Ot71GbygcHf",
              cell_no: "T57",
              total: false,
              name:
                "Social work and counselling professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "qg3FIv25BEt",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D58",
              total: false,
              name: "Social work associate professionals Stock Total default"
            },
            {
              deuid: "XMzAw0vw5Ep",
              cocuid: "drJDZnHzeBH",
              cell_no: "E58",
              total: false,
              name:
                "Social work associate professionals Stock By Activity Level Practising"
            },
            {
              deuid: "XMzAw0vw5Ep",
              cocuid: "VPShWMVpQkb",
              cell_no: "F58",
              total: false,
              name:
                "Social work associate professionals Stock By Activity Level Professionally active"
            },
            {
              deuid: "XMzAw0vw5Ep",
              cocuid: "xcotqxKxwlL",
              cell_no: "G58",
              total: false,
              name:
                "Social work associate professionals Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "kWzye8GtVeb",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H58",
              total: false,
              name: "Social work associate professionals Stock By Sex Male"
            },
            {
              deuid: "kWzye8GtVeb",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I58",
              total: false,
              name: "Social work associate professionals Stock By Sex Female"
            },
            {
              deuid: "Lsnc4RViH9F",
              cocuid: "StFfGxHbuDF",
              cell_no: "J58",
              total: false,
              name:
                "Social work associate professionals Stock By Age Group < 25 yrs"
            },
            {
              deuid: "Lsnc4RViH9F",
              cocuid: "unqbIiA0uir",
              cell_no: "K58",
              total: false,
              name:
                "Social work associate professionals Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "Lsnc4RViH9F",
              cocuid: "cMLHJtYTW40",
              cell_no: "L58",
              total: false,
              name:
                "Social work associate professionals Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "Lsnc4RViH9F",
              cocuid: "VioJV8V3lMO",
              cell_no: "M58",
              total: false,
              name:
                "Social work associate professionals Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "Lsnc4RViH9F",
              cocuid: "MYvkD09xyeq",
              cell_no: "N58",
              total: false,
              name:
                "Social work associate professionals Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "Lsnc4RViH9F",
              cocuid: "xIJxneZjiWm",
              cell_no: "O58",
              total: false,
              name:
                "Social work associate professionals Stock By Age Group > 65 yrs"
            },
            {
              deuid: "Y5XqolkuMAw",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P58",
              total: false,
              name:
                "Social work associate professionals Stock By Place of Birth National Born"
            },
            {
              deuid: "Y5XqolkuMAw",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q58",
              total: false,
              name:
                "Social work associate professionals Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "r2DSRRcdILk",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R58",
              total: false,
              name:
                "Social work associate professionals Stock By Place of Training Domestic"
            },
            {
              deuid: "r2DSRRcdILk",
              cocuid: "GSHgapGzSnl",
              cell_no: "S58",
              total: false,
              name:
                "Social work associate professionals Stock By Place of Training Foreign"
            },
            {
              deuid: "r2DSRRcdILk",
              cocuid: "Ot71GbygcHf",
              cell_no: "T58",
              total: false,
              name:
                "Social work associate professionals Stock By Place of Training Unknown"
            },
            {
              deuid: "ec8BXAwrBTh",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D59",
              total: false,
              name: "Biomedical engineer Stock Total default"
            },
            {
              deuid: "bmaxDrrFSqz",
              cocuid: "drJDZnHzeBH",
              cell_no: "E59",
              total: false,
              name: "Biomedical engineer Stock By Activity Level Practising"
            },
            {
              deuid: "bmaxDrrFSqz",
              cocuid: "VPShWMVpQkb",
              cell_no: "F59",
              total: false,
              name:
                "Biomedical engineer Stock By Activity Level Professionally active"
            },
            {
              deuid: "bmaxDrrFSqz",
              cocuid: "xcotqxKxwlL",
              cell_no: "G59",
              total: false,
              name:
                "Biomedical engineer Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "KHL0TSASQzg",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H59",
              total: false,
              name: "Biomedical engineer Stock By Sex Male"
            },
            {
              deuid: "KHL0TSASQzg",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I59",
              total: false,
              name: "Biomedical engineer Stock By Sex Female"
            },
            {
              deuid: "wXKdiD7gHdx",
              cocuid: "StFfGxHbuDF",
              cell_no: "J59",
              total: false,
              name: "Biomedical engineer Stock By Age Group < 25 yrs"
            },
            {
              deuid: "wXKdiD7gHdx",
              cocuid: "unqbIiA0uir",
              cell_no: "K59",
              total: false,
              name: "Biomedical engineer Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "wXKdiD7gHdx",
              cocuid: "cMLHJtYTW40",
              cell_no: "L59",
              total: false,
              name: "Biomedical engineer Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "wXKdiD7gHdx",
              cocuid: "VioJV8V3lMO",
              cell_no: "M59",
              total: false,
              name: "Biomedical engineer Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "wXKdiD7gHdx",
              cocuid: "MYvkD09xyeq",
              cell_no: "N59",
              total: false,
              name: "Biomedical engineer Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "wXKdiD7gHdx",
              cocuid: "xIJxneZjiWm",
              cell_no: "O59",
              total: false,
              name: "Biomedical engineer Stock By Age Group > 65 yrs"
            },
            {
              deuid: "PebkMQ9WtnK",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P59",
              total: false,
              name: "Biomedical engineer Stock By Place of Birth National Born"
            },
            {
              deuid: "PebkMQ9WtnK",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q59",
              total: false,
              name: "Biomedical engineer Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "FAoaZdPdq90",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R59",
              total: false,
              name: "Biomedical engineer Stock By Place of Training Domestic"
            },
            {
              deuid: "FAoaZdPdq90",
              cocuid: "GSHgapGzSnl",
              cell_no: "S59",
              total: false,
              name: "Biomedical engineer Stock By Place of Training Foreign"
            },
            {
              deuid: "FAoaZdPdq90",
              cocuid: "Ot71GbygcHf",
              cell_no: "T59",
              total: false,
              name: "Biomedical engineer Stock By Place of Training Unknown"
            },
            {
              deuid: "jY9ia5NLA77",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D60",
              total: false,
              name: "Psychologists Stock Total default"
            },
            {
              deuid: "rhcIHVJ1RxM",
              cocuid: "drJDZnHzeBH",
              cell_no: "E60",
              total: false,
              name: "Psychologists Stock By Activity Level Practising"
            },
            {
              deuid: "rhcIHVJ1RxM",
              cocuid: "VPShWMVpQkb",
              cell_no: "F60",
              total: false,
              name:
                "Psychologists Stock By Activity Level Professionally active"
            },
            {
              deuid: "rhcIHVJ1RxM",
              cocuid: "xcotqxKxwlL",
              cell_no: "G60",
              total: false,
              name: "Psychologists Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "Lbkg2I4JTgG",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H60",
              total: false,
              name: "Psychologists Stock By Sex Male"
            },
            {
              deuid: "Lbkg2I4JTgG",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I60",
              total: false,
              name: "Psychologists Stock By Sex Female"
            },
            {
              deuid: "HamZOQ3wtl5",
              cocuid: "StFfGxHbuDF",
              cell_no: "J60",
              total: false,
              name: "Psychologists Stock By Age Group < 25 yrs"
            },
            {
              deuid: "HamZOQ3wtl5",
              cocuid: "unqbIiA0uir",
              cell_no: "K60",
              total: false,
              name: "Psychologists Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "HamZOQ3wtl5",
              cocuid: "cMLHJtYTW40",
              cell_no: "L60",
              total: false,
              name: "Psychologists Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "HamZOQ3wtl5",
              cocuid: "VioJV8V3lMO",
              cell_no: "M60",
              total: false,
              name: "Psychologists Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "HamZOQ3wtl5",
              cocuid: "MYvkD09xyeq",
              cell_no: "N60",
              total: false,
              name: "Psychologists Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "HamZOQ3wtl5",
              cocuid: "xIJxneZjiWm",
              cell_no: "O60",
              total: false,
              name: "Psychologists Stock By Age Group > 65 yrs"
            },
            {
              deuid: "rsGK1D0Xkfj",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P60",
              total: false,
              name: "Psychologists Stock By Place of Birth National Born"
            },
            {
              deuid: "rsGK1D0Xkfj",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q60",
              total: false,
              name: "Psychologists Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "IgzM67pvha5",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R60",
              total: false,
              name: "Psychologists Stock By Place of Training Domestic"
            },
            {
              deuid: "IgzM67pvha5",
              cocuid: "GSHgapGzSnl",
              cell_no: "S60",
              total: false,
              name: "Psychologists Stock By Place of Training Foreign"
            },
            {
              deuid: "IgzM67pvha5",
              cocuid: "Ot71GbygcHf",
              cell_no: "T60",
              total: false,
              name: "Psychologists Stock By Place of Training Unknown"
            },
            {
              deuid: "I5C27Tsoc8I",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D61",
              total: false,
              name: "Medical secretaries stock Total default"
            },
            {
              deuid: "VmhSidKIxMp",
              cocuid: "drJDZnHzeBH",
              cell_no: "E61",
              total: false,
              name: "Medical secretaries stock By Activity Level Practising"
            },
            {
              deuid: "VmhSidKIxMp",
              cocuid: "VPShWMVpQkb",
              cell_no: "F61",
              total: false,
              name:
                "Medical secretaries stock By Activity Level Professionally active"
            },
            {
              deuid: "VmhSidKIxMp",
              cocuid: "xcotqxKxwlL",
              cell_no: "G61",
              total: false,
              name:
                "Medical secretaries stock By Activity Level Licensed to practise"
            },
            {
              deuid: "DC17owNKnOo",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H61",
              total: false,
              name: "Medical secretaries stock By Sex Male"
            },
            {
              deuid: "DC17owNKnOo",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I61",
              total: false,
              name: "Medical secretaries stock By Sex Female"
            },
            {
              deuid: "chzRB2FreBe",
              cocuid: "StFfGxHbuDF",
              cell_no: "J61",
              total: false,
              name: "Medical secretaries stock By Age Group < 25 yrs"
            },
            {
              deuid: "chzRB2FreBe",
              cocuid: "unqbIiA0uir",
              cell_no: "K61",
              total: false,
              name: "Medical secretaries stock By Age Group 25-34 yrs"
            },
            {
              deuid: "chzRB2FreBe",
              cocuid: "cMLHJtYTW40",
              cell_no: "L61",
              total: false,
              name: "Medical secretaries stock By Age Group 35-44 yrs"
            },
            {
              deuid: "chzRB2FreBe",
              cocuid: "VioJV8V3lMO",
              cell_no: "M61",
              total: false,
              name: "Medical secretaries stock By Age Group 45-54 yrs"
            },
            {
              deuid: "chzRB2FreBe",
              cocuid: "MYvkD09xyeq",
              cell_no: "N61",
              total: false,
              name: "Medical secretaries stock By Age Group 55-64 yrs"
            },
            {
              deuid: "chzRB2FreBe",
              cocuid: "xIJxneZjiWm",
              cell_no: "O61",
              total: false,
              name: "Medical secretaries stock By Age Group > 65 yrs"
            },
            {
              deuid: "XVRPTXuJBQe",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P61",
              total: false,
              name: "Medical secretaries stock By Place of Birth National Born"
            },
            {
              deuid: "XVRPTXuJBQe",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q61",
              total: false,
              name: "Medical secretaries stock By Place of Birth Foreign Born"
            },
            {
              deuid: "pulohYIR6jX",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R61",
              total: false,
              name: "Medical secretaries stock By Place of Training Domestic"
            },
            {
              deuid: "pulohYIR6jX",
              cocuid: "GSHgapGzSnl",
              cell_no: "S61",
              total: false,
              name: "Medical secretaries stock By Place of Training Foreign"
            },
            {
              deuid: "pulohYIR6jX",
              cocuid: "Ot71GbygcHf",
              cell_no: "T61",
              total: false,
              name: "Medical secretaries stock By Place of Training Unknown"
            },
            {
              deuid: "oFXCMBtu71f",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D62",
              total: false,
              name: "Managerial staff Stock Total default"
            },
            {
              deuid: "BbvMZojIbKI",
              cocuid: "drJDZnHzeBH",
              cell_no: "E62",
              total: false,
              name: "Managerial staff Stock By Activity Level Practising"
            },
            {
              deuid: "BbvMZojIbKI",
              cocuid: "VPShWMVpQkb",
              cell_no: "F62",
              total: false,
              name:
                "Managerial staff Stock By Activity Level Professionally active"
            },
            {
              deuid: "BbvMZojIbKI",
              cocuid: "xcotqxKxwlL",
              cell_no: "G62",
              total: false,
              name:
                "Managerial staff Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "Pmr5vKV0JhS",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H62",
              total: false,
              name: "Managerial staff Stock By Sex Male"
            },
            {
              deuid: "Pmr5vKV0JhS",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I62",
              total: false,
              name: "Managerial staff Stock By Sex Female"
            },
            {
              deuid: "ot3GyBTHeKe",
              cocuid: "StFfGxHbuDF",
              cell_no: "J62",
              total: false,
              name: "Managerial staff Stock By Age Group < 25 yrs"
            },
            {
              deuid: "ot3GyBTHeKe",
              cocuid: "unqbIiA0uir",
              cell_no: "K62",
              total: false,
              name: "Managerial staff Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "ot3GyBTHeKe",
              cocuid: "cMLHJtYTW40",
              cell_no: "L62",
              total: false,
              name: "Managerial staff Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "ot3GyBTHeKe",
              cocuid: "VioJV8V3lMO",
              cell_no: "M62",
              total: false,
              name: "Managerial staff Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "ot3GyBTHeKe",
              cocuid: "MYvkD09xyeq",
              cell_no: "N62",
              total: false,
              name: "Managerial staff Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "ot3GyBTHeKe",
              cocuid: "xIJxneZjiWm",
              cell_no: "O62",
              total: false,
              name: "Managerial staff Stock By Age Group > 65 yrs"
            },
            {
              deuid: "WPM1HkXyf6Z",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P62",
              total: false,
              name: "Managerial staff Stock By Place of Birth National Born"
            },
            {
              deuid: "WPM1HkXyf6Z",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q62",
              total: false,
              name: "Managerial staff Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "xUbrx2VHCy1",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R62",
              total: false,
              name: "Managerial staff Stock By Place of Training Domestic"
            },
            {
              deuid: "xUbrx2VHCy1",
              cocuid: "GSHgapGzSnl",
              cell_no: "S62",
              total: false,
              name: "Managerial staff Stock By Place of Training Foreign"
            },
            {
              deuid: "xUbrx2VHCy1",
              cocuid: "Ot71GbygcHf",
              cell_no: "T62",
              total: false,
              name: "Managerial staff Stock By Place of Training Unknown"
            },
            {
              deuid: "lT2PXXEtNc0",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D63",
              total: false,
              name: "Administrative staff Stock Total default"
            },
            {
              deuid: "XB5JA2zOjnB",
              cocuid: "drJDZnHzeBH",
              cell_no: "E63",
              total: false,
              name: "Administrative staff Stock By Activity Level Practising"
            },
            {
              deuid: "XB5JA2zOjnB",
              cocuid: "VPShWMVpQkb",
              cell_no: "F63",
              total: false,
              name:
                "Administrative staff Stock By Activity Level Professionally active"
            },
            {
              deuid: "XB5JA2zOjnB",
              cocuid: "xcotqxKxwlL",
              cell_no: "G63",
              total: false,
              name:
                "Administrative staff Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "srcYifXOgXq",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H63",
              total: false,
              name: "Administrative staff Stock By Sex Male"
            },
            {
              deuid: "srcYifXOgXq",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I63",
              total: false,
              name: "Administrative staff Stock By Sex Female"
            },
            {
              deuid: "iGP92WgNuVf",
              cocuid: "StFfGxHbuDF",
              cell_no: "J63",
              total: false,
              name: "Administrative staff Stock By Age Group < 25 yrs"
            },
            {
              deuid: "iGP92WgNuVf",
              cocuid: "unqbIiA0uir",
              cell_no: "K63",
              total: false,
              name: "Administrative staff Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "iGP92WgNuVf",
              cocuid: "cMLHJtYTW40",
              cell_no: "L63",
              total: false,
              name: "Administrative staff Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "iGP92WgNuVf",
              cocuid: "VioJV8V3lMO",
              cell_no: "M63",
              total: false,
              name: "Administrative staff Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "iGP92WgNuVf",
              cocuid: "MYvkD09xyeq",
              cell_no: "N63",
              total: false,
              name: "Administrative staff Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "iGP92WgNuVf",
              cocuid: "xIJxneZjiWm",
              cell_no: "O63",
              total: false,
              name: "Administrative staff Stock By Age Group > 65 yrs"
            },
            {
              deuid: "MXXzDDuba8n",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P63",
              total: false,
              name: "Administrative staff Stock By Place of Birth National Born"
            },
            {
              deuid: "MXXzDDuba8n",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q63",
              total: false,
              name: "Administrative staff Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "psjx0PchSPj",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R63",
              total: false,
              name: "Administrative staff Stock By Place of Training Domestic"
            },
            {
              deuid: "psjx0PchSPj",
              cocuid: "GSHgapGzSnl",
              cell_no: "S63",
              total: false,
              name: "Administrative staff Stock By Place of Training Foreign"
            },
            {
              deuid: "psjx0PchSPj",
              cocuid: "Ot71GbygcHf",
              cell_no: "T63",
              total: false,
              name: "Administrative staff Stock By Place of Training Unknown"
            },
            {
              deuid: "u4evyxHktVP",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D64",
              total: false,
              name: "Health information systems personnel Stock Total default"
            },
            {
              deuid: "vnwzR6DohHp",
              cocuid: "drJDZnHzeBH",
              cell_no: "E64",
              total: false,
              name:
                "Health information systems personnel Stock By Activity Level Practising"
            },
            {
              deuid: "vnwzR6DohHp",
              cocuid: "VPShWMVpQkb",
              cell_no: "F64",
              total: false,
              name:
                "Health information systems personnel Stock By Activity Level Professionally active"
            },
            {
              deuid: "vnwzR6DohHp",
              cocuid: "xcotqxKxwlL",
              cell_no: "G64",
              total: false,
              name:
                "Health information systems personnel Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "NI4NAaV0hSh",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H64",
              total: false,
              name: "Health information systems personnel Stock By Sex Male"
            },
            {
              deuid: "NI4NAaV0hSh",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I64",
              total: false,
              name: "Health information systems personnel Stock By Sex Female"
            },
            {
              deuid: "YkjANXB0C7q",
              cocuid: "StFfGxHbuDF",
              cell_no: "J64",
              total: false,
              name:
                "Health information systems personnel Stock By Age Group < 25 yrs"
            },
            {
              deuid: "YkjANXB0C7q",
              cocuid: "unqbIiA0uir",
              cell_no: "K64",
              total: false,
              name:
                "Health information systems personnel Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "YkjANXB0C7q",
              cocuid: "cMLHJtYTW40",
              cell_no: "L64",
              total: false,
              name:
                "Health information systems personnel Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "YkjANXB0C7q",
              cocuid: "VioJV8V3lMO",
              cell_no: "M64",
              total: false,
              name:
                "Health information systems personnel Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "YkjANXB0C7q",
              cocuid: "MYvkD09xyeq",
              cell_no: "N64",
              total: false,
              name:
                "Health information systems personnel Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "YkjANXB0C7q",
              cocuid: "xIJxneZjiWm",
              cell_no: "O64",
              total: false,
              name:
                "Health information systems personnel Stock By Age Group > 65 yrs"
            },
            {
              deuid: "H9hyUA3QPdl",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P64",
              total: false,
              name:
                "Health information systems personnel Stock By Place of Birth National Born"
            },
            {
              deuid: "H9hyUA3QPdl",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q64",
              total: false,
              name:
                "Health information systems personnel Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "ISnx1WJdoMN",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R64",
              total: false,
              name:
                "Health information systems personnel Stock By Place of Training Domestic"
            },
            {
              deuid: "ISnx1WJdoMN",
              cocuid: "GSHgapGzSnl",
              cell_no: "S64",
              total: false,
              name:
                "Health information systems personnel Stock By Place of Training Foreign"
            },
            {
              deuid: "ISnx1WJdoMN",
              cocuid: "Ot71GbygcHf",
              cell_no: "T64",
              total: false,
              name:
                "Health information systems personnel Stock By Place of Training Unknown"
            },
            {
              deuid: "DCAJyToy1TA",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D65",
              total: false,
              name: "Engineering and maintenance staff Stock Total default"
            },
            {
              deuid: "SPcq2CZFyzT",
              cocuid: "drJDZnHzeBH",
              cell_no: "E65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Activity Level Practising"
            },
            {
              deuid: "SPcq2CZFyzT",
              cocuid: "VPShWMVpQkb",
              cell_no: "F65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Activity Level Professionally active"
            },
            {
              deuid: "SPcq2CZFyzT",
              cocuid: "xcotqxKxwlL",
              cell_no: "G65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "nsI6nzlSumR",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H65",
              total: false,
              name: "Engineering and maintenance staff Stock By Sex Male"
            },
            {
              deuid: "nsI6nzlSumR",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I65",
              total: false,
              name: "Engineering and maintenance staff Stock By Sex Female"
            },
            {
              deuid: "XI9W6umECmC",
              cocuid: "StFfGxHbuDF",
              cell_no: "J65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Age Group < 25 yrs"
            },
            {
              deuid: "XI9W6umECmC",
              cocuid: "unqbIiA0uir",
              cell_no: "K65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "XI9W6umECmC",
              cocuid: "cMLHJtYTW40",
              cell_no: "L65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "XI9W6umECmC",
              cocuid: "VioJV8V3lMO",
              cell_no: "M65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "XI9W6umECmC",
              cocuid: "MYvkD09xyeq",
              cell_no: "N65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "XI9W6umECmC",
              cocuid: "xIJxneZjiWm",
              cell_no: "O65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Age Group > 65 yrs"
            },
            {
              deuid: "fn91BEPSaGY",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Place of Birth National Born"
            },
            {
              deuid: "fn91BEPSaGY",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "e2G8l2GXMCi",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Place of Training Domestic"
            },
            {
              deuid: "e2G8l2GXMCi",
              cocuid: "GSHgapGzSnl",
              cell_no: "S65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Place of Training Foreign"
            },
            {
              deuid: "e2G8l2GXMCi",
              cocuid: "Ot71GbygcHf",
              cell_no: "T65",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Place of Training Unknown"
            },
            {
              deuid: "bUGq4WaBHUD",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D66",
              total: false,
              name: "Other non-medical professional staff Stock Total default"
            },
            {
              deuid: "DeDi7rft4BB",
              cocuid: "drJDZnHzeBH",
              cell_no: "E66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Activity Level Practising"
            },
            {
              deuid: "DeDi7rft4BB",
              cocuid: "VPShWMVpQkb",
              cell_no: "F66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Activity Level Professionally active"
            },
            {
              deuid: "DeDi7rft4BB",
              cocuid: "xcotqxKxwlL",
              cell_no: "G66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "rzOMBqJQhrD",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H66",
              total: false,
              name: "Other non-medical professional staff Stock By Sex Male"
            },
            {
              deuid: "rzOMBqJQhrD",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I66",
              total: false,
              name: "Other non-medical professional staff Stock By Sex Female"
            },
            {
              deuid: "xxeHTOGKpCJ",
              cocuid: "StFfGxHbuDF",
              cell_no: "J66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Age Group < 25 yrs"
            },
            {
              deuid: "xxeHTOGKpCJ",
              cocuid: "unqbIiA0uir",
              cell_no: "K66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "xxeHTOGKpCJ",
              cocuid: "cMLHJtYTW40",
              cell_no: "L66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "xxeHTOGKpCJ",
              cocuid: "VioJV8V3lMO",
              cell_no: "M66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "xxeHTOGKpCJ",
              cocuid: "MYvkD09xyeq",
              cell_no: "N66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "xxeHTOGKpCJ",
              cocuid: "xIJxneZjiWm",
              cell_no: "O66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Age Group > 65 yrs"
            },
            {
              deuid: "pl4ewykGEd1",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Place of Birth National Born"
            },
            {
              deuid: "pl4ewykGEd1",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "pmcCjSU7an3",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Place of Training Domestic"
            },
            {
              deuid: "pmcCjSU7an3",
              cocuid: "GSHgapGzSnl",
              cell_no: "S66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Place of Training Foreign"
            },
            {
              deuid: "pmcCjSU7an3",
              cocuid: "Ot71GbygcHf",
              cell_no: "T66",
              total: false,
              name:
                "Other non-medical professional staff Stock By Place of Training Unknown"
            },
            {
              deuid: "v8Xnaigda7O",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D67",
              total: false,
              name: "Other non-medical support staff Stock Total default"
            },
            {
              deuid: "LX2QltISk5s",
              cocuid: "drJDZnHzeBH",
              cell_no: "E67",
              total: false,
              name:
                "Other non-medical support staff Stock By Activity Level Practising"
            },
            {
              deuid: "LX2QltISk5s",
              cocuid: "VPShWMVpQkb",
              cell_no: "F67",
              total: false,
              name:
                "Other non-medical support staff Stock By Activity Level Professionally active"
            },
            {
              deuid: "LX2QltISk5s",
              cocuid: "xcotqxKxwlL",
              cell_no: "G67",
              total: false,
              name:
                "Other non-medical support staff Stock By Activity Level Licensed to practise"
            },
            {
              deuid: "sFlo2nMKUjV",
              cocuid: "sAC6z2IMFrR",
              cell_no: "H67",
              total: false,
              name: "Other non-medical support staff Stock By Sex Male"
            },
            {
              deuid: "sFlo2nMKUjV",
              cocuid: "F3kCvhpDnMM",
              cell_no: "I67",
              total: false,
              name: "Other non-medical support staff Stock By Sex Female"
            },
            {
              deuid: "gEnofzKU8FV",
              cocuid: "StFfGxHbuDF",
              cell_no: "J67",
              total: false,
              name:
                "Other non-medical support staff Stock By Age Group < 25 yrs"
            },
            {
              deuid: "gEnofzKU8FV",
              cocuid: "unqbIiA0uir",
              cell_no: "K67",
              total: false,
              name:
                "Other non-medical support staff Stock By Age Group 25-34 yrs"
            },
            {
              deuid: "gEnofzKU8FV",
              cocuid: "cMLHJtYTW40",
              cell_no: "L67",
              total: false,
              name:
                "Other non-medical support staff Stock By Age Group 35-44 yrs"
            },
            {
              deuid: "gEnofzKU8FV",
              cocuid: "VioJV8V3lMO",
              cell_no: "M67",
              total: false,
              name:
                "Other non-medical support staff Stock By Age Group 45-54 yrs"
            },
            {
              deuid: "gEnofzKU8FV",
              cocuid: "MYvkD09xyeq",
              cell_no: "N67",
              total: false,
              name:
                "Other non-medical support staff Stock By Age Group 55-64 yrs"
            },
            {
              deuid: "gEnofzKU8FV",
              cocuid: "xIJxneZjiWm",
              cell_no: "O67",
              total: false,
              name:
                "Other non-medical support staff Stock By Age Group > 65 yrs"
            },
            {
              deuid: "n7GyaiCn7uH",
              cocuid: "XTvbzm2HwCZ",
              cell_no: "P67",
              total: false,
              name:
                "Other non-medical support staff Stock By Place of Birth National Born"
            },
            {
              deuid: "n7GyaiCn7uH",
              cocuid: "uBsAlWtPLFK",
              cell_no: "Q67",
              total: false,
              name:
                "Other non-medical support staff Stock By Place of Birth Foreign Born"
            },
            {
              deuid: "sdCYhjOxnoD",
              cocuid: "VxD9oa7UFFY",
              cell_no: "R67",
              total: false,
              name:
                "Other non-medical support staff Stock By Place of Training Domestic"
            },
            {
              deuid: "sdCYhjOxnoD",
              cocuid: "GSHgapGzSnl",
              cell_no: "S67",
              total: false,
              name:
                "Other non-medical support staff Stock By Place of Training Foreign"
            },
            {
              deuid: "sdCYhjOxnoD",
              cocuid: "Ot71GbygcHf",
              cell_no: "T67",
              total: false,
              name:
                "Other non-medical support staff Stock By Place of Training Unknown"
            }
          ]
        },
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 2,
          sheet_name: "Other sheet",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "N2",
          year_cell: "M4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "WsVBFxzWhi1",
              cocuid: "IMqululFzhP",
              cell_no: "E13",
              total: true,
              name: "Medical Doctors Stock By HF Ownership Public"
            },
            {
              deuid: "WsVBFxzWhi1",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F13",
              total: true,
              name:
                "Medical Doctors Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "WsVBFxzWhi1",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G13",
              total: true,
              name: "Medical Doctors Stock By HF Ownership Private for profit"
            },
            {
              deuid: "nLbuvx5jioD",
              cocuid: "p3raMKTiHsj",
              cell_no: "H13",
              total: true,
              name: "Medical Doctors Stock By Working Facility Type HP.1"
            },
            {
              deuid: "nLbuvx5jioD",
              cocuid: "DyPeahMx1ww",
              cell_no: "I13",
              total: true,
              name: "Medical Doctors Stock By Working Facility Type HP.2"
            },
            {
              deuid: "nLbuvx5jioD",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J13",
              total: true,
              name: "Medical Doctors Stock By Working Facility Type HP.3"
            },
            {
              deuid: "nLbuvx5jioD",
              cocuid: "Vy4zROU78hr",
              cell_no: "K13",
              total: true,
              name: "Medical Doctors Stock By Working Facility Type HP.4"
            },
            {
              deuid: "nLbuvx5jioD",
              cocuid: "SbearYuCfX5",
              cell_no: "L13",
              total: true,
              name: "Medical Doctors Stock By Working Facility Type HP.5"
            },
            {
              deuid: "nLbuvx5jioD",
              cocuid: "TCVfWydCsa4",
              cell_no: "M13",
              total: true,
              name: "Medical Doctors Stock By Working Facility Type HP.6"
            },
            {
              deuid: "Q7AJ1ykq09H",
              cocuid: "IMqululFzhP",
              cell_no: "E14",
              total: false,
              name: "General Medical Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "Q7AJ1ykq09H",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F14",
              total: false,
              name:
                "General Medical Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "Q7AJ1ykq09H",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G14",
              total: false,
              name:
                "General Medical Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "TTLIv7PVhKo",
              cocuid: "p3raMKTiHsj",
              cell_no: "H14",
              total: false,
              name:
                "General Medical Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "TTLIv7PVhKo",
              cocuid: "DyPeahMx1ww",
              cell_no: "I14",
              total: false,
              name:
                "General Medical Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "TTLIv7PVhKo",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J14",
              total: false,
              name:
                "General Medical Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "TTLIv7PVhKo",
              cocuid: "Vy4zROU78hr",
              cell_no: "K14",
              total: false,
              name:
                "General Medical Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "TTLIv7PVhKo",
              cocuid: "SbearYuCfX5",
              cell_no: "L14",
              total: false,
              name:
                "General Medical Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "TTLIv7PVhKo",
              cocuid: "TCVfWydCsa4",
              cell_no: "M14",
              total: false,
              name:
                "General Medical Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "N6pEEiEpNS1",
              cocuid: "IMqululFzhP",
              cell_no: "E15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "N6pEEiEpNS1",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "N6pEEiEpNS1",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "PDI1LOtG5mD",
              cocuid: "p3raMKTiHsj",
              cell_no: "H15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "PDI1LOtG5mD",
              cocuid: "DyPeahMx1ww",
              cell_no: "I15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "PDI1LOtG5mD",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "PDI1LOtG5mD",
              cocuid: "Vy4zROU78hr",
              cell_no: "K15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "PDI1LOtG5mD",
              cocuid: "SbearYuCfX5",
              cell_no: "L15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "PDI1LOtG5mD",
              cocuid: "TCVfWydCsa4",
              cell_no: "M15",
              total: false,
              name:
                "Specialist Medical Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "abfQV1VOf3t",
              cocuid: "IMqululFzhP",
              cell_no: "E16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "abfQV1VOf3t",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "abfQV1VOf3t",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "AlxUCNc8gwW",
              cocuid: "p3raMKTiHsj",
              cell_no: "H16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "AlxUCNc8gwW",
              cocuid: "DyPeahMx1ww",
              cell_no: "I16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "AlxUCNc8gwW",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "AlxUCNc8gwW",
              cocuid: "Vy4zROU78hr",
              cell_no: "K16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "AlxUCNc8gwW",
              cocuid: "SbearYuCfX5",
              cell_no: "L16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "AlxUCNc8gwW",
              cocuid: "TCVfWydCsa4",
              cell_no: "M16",
              total: false,
              name:
                "General Paediatricians Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "gm3SPYN1Kox",
              cocuid: "IMqululFzhP",
              cell_no: "E17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "gm3SPYN1Kox",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "gm3SPYN1Kox",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "lzuWRVfUjkQ",
              cocuid: "p3raMKTiHsj",
              cell_no: "H17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "lzuWRVfUjkQ",
              cocuid: "DyPeahMx1ww",
              cell_no: "I17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "lzuWRVfUjkQ",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "lzuWRVfUjkQ",
              cocuid: "Vy4zROU78hr",
              cell_no: "K17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "lzuWRVfUjkQ",
              cocuid: "SbearYuCfX5",
              cell_no: "L17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "lzuWRVfUjkQ",
              cocuid: "TCVfWydCsa4",
              cell_no: "M17",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "yRAQ7e6fhhL",
              cocuid: "IMqululFzhP",
              cell_no: "E18",
              total: false,
              name: "Psychiatrists Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "yRAQ7e6fhhL",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F18",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "yRAQ7e6fhhL",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G18",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "GYmXWDOK6w7",
              cocuid: "p3raMKTiHsj",
              cell_no: "H18",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "GYmXWDOK6w7",
              cocuid: "DyPeahMx1ww",
              cell_no: "I18",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "GYmXWDOK6w7",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J18",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "GYmXWDOK6w7",
              cocuid: "Vy4zROU78hr",
              cell_no: "K18",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "GYmXWDOK6w7",
              cocuid: "SbearYuCfX5",
              cell_no: "L18",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "GYmXWDOK6w7",
              cocuid: "TCVfWydCsa4",
              cell_no: "M18",
              total: false,
              name:
                "Psychiatrists Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "ae8CH5krsam",
              cocuid: "IMqululFzhP",
              cell_no: "E19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "ae8CH5krsam",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "ae8CH5krsam",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "vZfb8jHv6hE",
              cocuid: "p3raMKTiHsj",
              cell_no: "H19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "vZfb8jHv6hE",
              cocuid: "DyPeahMx1ww",
              cell_no: "I19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "vZfb8jHv6hE",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "vZfb8jHv6hE",
              cocuid: "Vy4zROU78hr",
              cell_no: "K19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "vZfb8jHv6hE",
              cocuid: "SbearYuCfX5",
              cell_no: "L19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "vZfb8jHv6hE",
              cocuid: "TCVfWydCsa4",
              cell_no: "M19",
              total: false,
              name:
                "Medical group of Specialists Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "Nv40tdMXtFC",
              cocuid: "IMqululFzhP",
              cell_no: "E20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "Nv40tdMXtFC",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "Nv40tdMXtFC",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "QtxlZLxjuRg",
              cocuid: "p3raMKTiHsj",
              cell_no: "H20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "QtxlZLxjuRg",
              cocuid: "DyPeahMx1ww",
              cell_no: "I20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "QtxlZLxjuRg",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "QtxlZLxjuRg",
              cocuid: "Vy4zROU78hr",
              cell_no: "K20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "QtxlZLxjuRg",
              cocuid: "SbearYuCfX5",
              cell_no: "L20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "QtxlZLxjuRg",
              cocuid: "TCVfWydCsa4",
              cell_no: "M20",
              total: false,
              name:
                "Surgical group of Specialists Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "cDnBDmJhson",
              cocuid: "IMqululFzhP",
              cell_no: "E21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "cDnBDmJhson",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "cDnBDmJhson",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "z6awB2DkDD5",
              cocuid: "p3raMKTiHsj",
              cell_no: "H21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "z6awB2DkDD5",
              cocuid: "DyPeahMx1ww",
              cell_no: "I21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "z6awB2DkDD5",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "z6awB2DkDD5",
              cocuid: "Vy4zROU78hr",
              cell_no: "K21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "z6awB2DkDD5",
              cocuid: "SbearYuCfX5",
              cell_no: "L21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "z6awB2DkDD5",
              cocuid: "TCVfWydCsa4",
              cell_no: "M21",
              total: false,
              name:
                "Other Specialists Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "qScWuUGR5yF",
              cocuid: "IMqululFzhP",
              cell_no: "E22",
              total: false,
              name:
                "Medical doctors not further defined Stock By HF Ownership Public"
            },
            {
              deuid: "qScWuUGR5yF",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F22",
              total: false,
              name:
                "Medical doctors not further defined Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "qScWuUGR5yF",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G22",
              total: false,
              name:
                "Medical doctors not further defined Stock By HF Ownership Private for profit"
            },
            {
              deuid: "tnPO3Tkofqr",
              cocuid: "p3raMKTiHsj",
              cell_no: "H22",
              total: false,
              name:
                "Medical doctors not further defined Stock By Working Facility Type HP.1"
            },
            {
              deuid: "tnPO3Tkofqr",
              cocuid: "DyPeahMx1ww",
              cell_no: "I22",
              total: false,
              name:
                "Medical doctors not further defined Stock By Working Facility Type HP.2"
            },
            {
              deuid: "tnPO3Tkofqr",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J22",
              total: false,
              name:
                "Medical doctors not further defined Stock By Working Facility Type HP.3"
            },
            {
              deuid: "tnPO3Tkofqr",
              cocuid: "Vy4zROU78hr",
              cell_no: "K22",
              total: false,
              name:
                "Medical doctors not further defined Stock By Working Facility Type HP.4"
            },
            {
              deuid: "tnPO3Tkofqr",
              cocuid: "SbearYuCfX5",
              cell_no: "L22",
              total: false,
              name:
                "Medical doctors not further defined Stock By Working Facility Type HP.5"
            },
            {
              deuid: "tnPO3Tkofqr",
              cocuid: "TCVfWydCsa4",
              cell_no: "M22",
              total: false,
              name:
                "Medical doctors not further defined Stock By Working Facility Type HP.6"
            },
            {
              deuid: "KGnMzMLw9z0",
              cocuid: "IMqululFzhP",
              cell_no: "E23",
              total: true,
              name: "Nursing  Personnel Stock By HF Ownership Public"
            },
            {
              deuid: "KGnMzMLw9z0",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F23",
              total: true,
              name:
                "Nursing  Personnel Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "KGnMzMLw9z0",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G23",
              total: true,
              name:
                "Nursing  Personnel Stock By HF Ownership Private for profit"
            },
            {
              deuid: "GuIr410uu6E",
              cocuid: "p3raMKTiHsj",
              cell_no: "H23",
              total: true,
              name: "Nursing  Personnel Stock By Working Facility Type HP.1"
            },
            {
              deuid: "GuIr410uu6E",
              cocuid: "DyPeahMx1ww",
              cell_no: "I23",
              total: true,
              name: "Nursing  Personnel Stock By Working Facility Type HP.2"
            },
            {
              deuid: "GuIr410uu6E",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J23",
              total: true,
              name: "Nursing  Personnel Stock By Working Facility Type HP.3"
            },
            {
              deuid: "GuIr410uu6E",
              cocuid: "Vy4zROU78hr",
              cell_no: "K23",
              total: true,
              name: "Nursing  Personnel Stock By Working Facility Type HP.4"
            },
            {
              deuid: "GuIr410uu6E",
              cocuid: "SbearYuCfX5",
              cell_no: "L23",
              total: true,
              name: "Nursing  Personnel Stock By Working Facility Type HP.5"
            },
            {
              deuid: "GuIr410uu6E",
              cocuid: "TCVfWydCsa4",
              cell_no: "M23",
              total: true,
              name: "Nursing  Personnel Stock By Working Facility Type HP.6"
            },
            {
              deuid: "HU1QlB34WcG",
              cocuid: "IMqululFzhP",
              cell_no: "E24",
              total: false,
              name: "Nursing Professionals Stock By HF Ownership Public"
            },
            {
              deuid: "HU1QlB34WcG",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F24",
              total: false,
              name:
                "Nursing Professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "HU1QlB34WcG",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G24",
              total: false,
              name:
                "Nursing Professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "cROoQk16jlH",
              cocuid: "p3raMKTiHsj",
              cell_no: "H24",
              total: false,
              name: "Nursing Professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "cROoQk16jlH",
              cocuid: "DyPeahMx1ww",
              cell_no: "I24",
              total: false,
              name: "Nursing Professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "cROoQk16jlH",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J24",
              total: false,
              name: "Nursing Professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "cROoQk16jlH",
              cocuid: "Vy4zROU78hr",
              cell_no: "K24",
              total: false,
              name: "Nursing Professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "cROoQk16jlH",
              cocuid: "SbearYuCfX5",
              cell_no: "L24",
              total: false,
              name: "Nursing Professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "cROoQk16jlH",
              cocuid: "TCVfWydCsa4",
              cell_no: "M24",
              total: false,
              name: "Nursing Professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "GXDCQoGj6T3",
              cocuid: "IMqululFzhP",
              cell_no: "E25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By HF Ownership Public"
            },
            {
              deuid: "GXDCQoGj6T3",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By HF Ownership Private not for profit"
            },
            {
              deuid: "GXDCQoGj6T3",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By HF Ownership Private for profit"
            },
            {
              deuid: "ja0fxo22OTu",
              cocuid: "p3raMKTiHsj",
              cell_no: "H25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Working Facility Type HP.1"
            },
            {
              deuid: "ja0fxo22OTu",
              cocuid: "DyPeahMx1ww",
              cell_no: "I25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Working Facility Type HP.2"
            },
            {
              deuid: "ja0fxo22OTu",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Working Facility Type HP.3"
            },
            {
              deuid: "ja0fxo22OTu",
              cocuid: "Vy4zROU78hr",
              cell_no: "K25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Working Facility Type HP.4"
            },
            {
              deuid: "ja0fxo22OTu",
              cocuid: "SbearYuCfX5",
              cell_no: "L25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Working Facility Type HP.5"
            },
            {
              deuid: "ja0fxo22OTu",
              cocuid: "TCVfWydCsa4",
              cell_no: "M25",
              total: false,
              name:
                "Nursing Professionals Stock with additional midwifery training By Working Facility Type HP.6"
            },
            {
              deuid: "O7xuokSXg4m",
              cocuid: "IMqululFzhP",
              cell_no: "E26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By HF Ownership Public"
            },
            {
              deuid: "O7xuokSXg4m",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "O7xuokSXg4m",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "mZVNxEL1OKd",
              cocuid: "p3raMKTiHsj",
              cell_no: "H26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "mZVNxEL1OKd",
              cocuid: "DyPeahMx1ww",
              cell_no: "I26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "mZVNxEL1OKd",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "mZVNxEL1OKd",
              cocuid: "Vy4zROU78hr",
              cell_no: "K26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "mZVNxEL1OKd",
              cocuid: "SbearYuCfX5",
              cell_no: "L26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "mZVNxEL1OKd",
              cocuid: "TCVfWydCsa4",
              cell_no: "M26",
              total: false,
              name:
                "Nursing Associate Professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "a7y6M6RSlfA",
              cocuid: "IMqululFzhP",
              cell_no: "E27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By HF Ownership Public"
            },
            {
              deuid: "a7y6M6RSlfA",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By HF Ownership Private not for profit"
            },
            {
              deuid: "a7y6M6RSlfA",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By HF Ownership Private for profit"
            },
            {
              deuid: "nOKbmhjyCYA",
              cocuid: "p3raMKTiHsj",
              cell_no: "H27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Working Facility Type HP.1"
            },
            {
              deuid: "nOKbmhjyCYA",
              cocuid: "DyPeahMx1ww",
              cell_no: "I27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Working Facility Type HP.2"
            },
            {
              deuid: "nOKbmhjyCYA",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Working Facility Type HP.3"
            },
            {
              deuid: "nOKbmhjyCYA",
              cocuid: "Vy4zROU78hr",
              cell_no: "K27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Working Facility Type HP.4"
            },
            {
              deuid: "nOKbmhjyCYA",
              cocuid: "SbearYuCfX5",
              cell_no: "L27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Working Facility Type HP.5"
            },
            {
              deuid: "nOKbmhjyCYA",
              cocuid: "TCVfWydCsa4",
              cell_no: "M27",
              total: false,
              name:
                "Nursing Associate Professionals Stock with additional midwifery training By Working Facility Type HP.6"
            },
            {
              deuid: "YvRkyv7LXzq",
              cocuid: "IMqululFzhP",
              cell_no: "E28",
              total: false,
              name: "Nurses not further defined Stock By HF Ownership Public"
            },
            {
              deuid: "YvRkyv7LXzq",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F28",
              total: false,
              name:
                "Nurses not further defined Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "YvRkyv7LXzq",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G28",
              total: false,
              name:
                "Nurses not further defined Stock By HF Ownership Private for profit"
            },
            {
              deuid: "e7mFNsyiTtQ",
              cocuid: "p3raMKTiHsj",
              cell_no: "H28",
              total: false,
              name:
                "Nurses not further defined Stock By Working Facility Type HP.1"
            },
            {
              deuid: "e7mFNsyiTtQ",
              cocuid: "DyPeahMx1ww",
              cell_no: "I28",
              total: false,
              name:
                "Nurses not further defined Stock By Working Facility Type HP.2"
            },
            {
              deuid: "e7mFNsyiTtQ",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J28",
              total: false,
              name:
                "Nurses not further defined Stock By Working Facility Type HP.3"
            },
            {
              deuid: "e7mFNsyiTtQ",
              cocuid: "Vy4zROU78hr",
              cell_no: "K28",
              total: false,
              name:
                "Nurses not further defined Stock By Working Facility Type HP.4"
            },
            {
              deuid: "e7mFNsyiTtQ",
              cocuid: "SbearYuCfX5",
              cell_no: "L28",
              total: false,
              name:
                "Nurses not further defined Stock By Working Facility Type HP.5"
            },
            {
              deuid: "e7mFNsyiTtQ",
              cocuid: "TCVfWydCsa4",
              cell_no: "M28",
              total: false,
              name:
                "Nurses not further defined Stock By Working Facility Type HP.6"
            },
            {
              deuid: "qCRmLPzIMfA",
              cocuid: "IMqululFzhP",
              cell_no: "E29",
              total: true,
              name: "Midwifery personnel Stock By HF Ownership Public"
            },
            {
              deuid: "qCRmLPzIMfA",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F29",
              total: true,
              name:
                "Midwifery personnel Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "qCRmLPzIMfA",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G29",
              total: true,
              name:
                "Midwifery personnel Stock By HF Ownership Private for profit"
            },
            {
              deuid: "iLowQAmnmZK",
              cocuid: "p3raMKTiHsj",
              cell_no: "H29",
              total: true,
              name: "Midwifery personnel Stock By Working Facility Type HP.1"
            },
            {
              deuid: "iLowQAmnmZK",
              cocuid: "DyPeahMx1ww",
              cell_no: "I29",
              total: true,
              name: "Midwifery personnel Stock By Working Facility Type HP.2"
            },
            {
              deuid: "iLowQAmnmZK",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J29",
              total: true,
              name: "Midwifery personnel Stock By Working Facility Type HP.3"
            },
            {
              deuid: "iLowQAmnmZK",
              cocuid: "Vy4zROU78hr",
              cell_no: "K29",
              total: true,
              name: "Midwifery personnel Stock By Working Facility Type HP.4"
            },
            {
              deuid: "iLowQAmnmZK",
              cocuid: "SbearYuCfX5",
              cell_no: "L29",
              total: true,
              name: "Midwifery personnel Stock By Working Facility Type HP.5"
            },
            {
              deuid: "iLowQAmnmZK",
              cocuid: "TCVfWydCsa4",
              cell_no: "M29",
              total: true,
              name: "Midwifery personnel Stock By Working Facility Type HP.6"
            },
            {
              deuid: "i54ywgixjhp",
              cocuid: "IMqululFzhP",
              cell_no: "E30",
              total: false,
              name: "Midwifery Professionals Stock By HF Ownership Public"
            },
            {
              deuid: "i54ywgixjhp",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F30",
              total: false,
              name:
                "Midwifery Professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "i54ywgixjhp",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G30",
              total: false,
              name:
                "Midwifery Professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "lguPmuZBWDk",
              cocuid: "p3raMKTiHsj",
              cell_no: "H30",
              total: false,
              name:
                "Midwifery Professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "lguPmuZBWDk",
              cocuid: "DyPeahMx1ww",
              cell_no: "I30",
              total: false,
              name:
                "Midwifery Professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "lguPmuZBWDk",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J30",
              total: false,
              name:
                "Midwifery Professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "lguPmuZBWDk",
              cocuid: "Vy4zROU78hr",
              cell_no: "K30",
              total: false,
              name:
                "Midwifery Professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "lguPmuZBWDk",
              cocuid: "SbearYuCfX5",
              cell_no: "L30",
              total: false,
              name:
                "Midwifery Professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "lguPmuZBWDk",
              cocuid: "TCVfWydCsa4",
              cell_no: "M30",
              total: false,
              name:
                "Midwifery Professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "O9FGiWCttH4",
              cocuid: "IMqululFzhP",
              cell_no: "E31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By HF Ownership Public"
            },
            {
              deuid: "O9FGiWCttH4",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "O9FGiWCttH4",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "u7WSQpbLBGs",
              cocuid: "p3raMKTiHsj",
              cell_no: "H31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "u7WSQpbLBGs",
              cocuid: "DyPeahMx1ww",
              cell_no: "I31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "u7WSQpbLBGs",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "u7WSQpbLBGs",
              cocuid: "Vy4zROU78hr",
              cell_no: "K31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "u7WSQpbLBGs",
              cocuid: "SbearYuCfX5",
              cell_no: "L31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "u7WSQpbLBGs",
              cocuid: "TCVfWydCsa4",
              cell_no: "M31",
              total: false,
              name:
                "Midwifery Associate Professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "GeB8aO0VMdh",
              cocuid: "IMqululFzhP",
              cell_no: "E32",
              total: false,
              name: "Midwives not further defined Stock By HF Ownership Public"
            },
            {
              deuid: "GeB8aO0VMdh",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F32",
              total: false,
              name:
                "Midwives not further defined Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "GeB8aO0VMdh",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G32",
              total: false,
              name:
                "Midwives not further defined Stock By HF Ownership Private for profit"
            },
            {
              deuid: "ezAgi6u5Qta",
              cocuid: "p3raMKTiHsj",
              cell_no: "H32",
              total: false,
              name:
                "Midwives not further defined Stock By Working Facility Type HP.1"
            },
            {
              deuid: "ezAgi6u5Qta",
              cocuid: "DyPeahMx1ww",
              cell_no: "I32",
              total: false,
              name:
                "Midwives not further defined Stock By Working Facility Type HP.2"
            },
            {
              deuid: "ezAgi6u5Qta",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J32",
              total: false,
              name:
                "Midwives not further defined Stock By Working Facility Type HP.3"
            },
            {
              deuid: "ezAgi6u5Qta",
              cocuid: "Vy4zROU78hr",
              cell_no: "K32",
              total: false,
              name:
                "Midwives not further defined Stock By Working Facility Type HP.4"
            },
            {
              deuid: "ezAgi6u5Qta",
              cocuid: "SbearYuCfX5",
              cell_no: "L32",
              total: false,
              name:
                "Midwives not further defined Stock By Working Facility Type HP.5"
            },
            {
              deuid: "ezAgi6u5Qta",
              cocuid: "TCVfWydCsa4",
              cell_no: "M32",
              total: false,
              name:
                "Midwives not further defined Stock By Working Facility Type HP.6"
            },
            {
              deuid: "OJVKXPCUetq",
              cocuid: "IMqululFzhP",
              cell_no: "E33",
              total: false,
              name: "Dentists Stock By HF Ownership Public"
            },
            {
              deuid: "OJVKXPCUetq",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F33",
              total: false,
              name: "Dentists Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "OJVKXPCUetq",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G33",
              total: false,
              name: "Dentists Stock By HF Ownership Private for profit"
            },
            {
              deuid: "CUmZXLC1FrK",
              cocuid: "p3raMKTiHsj",
              cell_no: "H33",
              total: false,
              name: "Dentists Stock By Working Facility Type HP.1"
            },
            {
              deuid: "CUmZXLC1FrK",
              cocuid: "DyPeahMx1ww",
              cell_no: "I33",
              total: false,
              name: "Dentists Stock By Working Facility Type HP.2"
            },
            {
              deuid: "CUmZXLC1FrK",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J33",
              total: false,
              name: "Dentists Stock By Working Facility Type HP.3"
            },
            {
              deuid: "CUmZXLC1FrK",
              cocuid: "Vy4zROU78hr",
              cell_no: "K33",
              total: false,
              name: "Dentists Stock By Working Facility Type HP.4"
            },
            {
              deuid: "CUmZXLC1FrK",
              cocuid: "SbearYuCfX5",
              cell_no: "L33",
              total: false,
              name: "Dentists Stock By Working Facility Type HP.5"
            },
            {
              deuid: "CUmZXLC1FrK",
              cocuid: "TCVfWydCsa4",
              cell_no: "M33",
              total: false,
              name: "Dentists Stock By Working Facility Type HP.6"
            },
            {
              deuid: "EiN0OWdHFxO",
              cocuid: "IMqululFzhP",
              cell_no: "E34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By HF Ownership Public"
            },
            {
              deuid: "EiN0OWdHFxO",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "EiN0OWdHFxO",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By HF Ownership Private for profit"
            },
            {
              deuid: "l7UXvoiTgEX",
              cocuid: "p3raMKTiHsj",
              cell_no: "H34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Working Facility Type HP.1"
            },
            {
              deuid: "l7UXvoiTgEX",
              cocuid: "DyPeahMx1ww",
              cell_no: "I34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Working Facility Type HP.2"
            },
            {
              deuid: "l7UXvoiTgEX",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Working Facility Type HP.3"
            },
            {
              deuid: "l7UXvoiTgEX",
              cocuid: "Vy4zROU78hr",
              cell_no: "K34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Working Facility Type HP.4"
            },
            {
              deuid: "l7UXvoiTgEX",
              cocuid: "SbearYuCfX5",
              cell_no: "L34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Working Facility Type HP.5"
            },
            {
              deuid: "l7UXvoiTgEX",
              cocuid: "TCVfWydCsa4",
              cell_no: "M34",
              total: false,
              name:
                "Dental Assistants and Therapists Stock By Working Facility Type HP.6"
            },
            {
              deuid: "wbE8v4xoinz",
              cocuid: "IMqululFzhP",
              cell_no: "E35",
              total: false,
              name: "Dental Prosthetic Technicians Stock By HF Ownership Public"
            },
            {
              deuid: "wbE8v4xoinz",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F35",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "wbE8v4xoinz",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G35",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By HF Ownership Private for profit"
            },
            {
              deuid: "pZph18i0E3N",
              cocuid: "p3raMKTiHsj",
              cell_no: "H35",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Working Facility Type HP.1"
            },
            {
              deuid: "pZph18i0E3N",
              cocuid: "DyPeahMx1ww",
              cell_no: "I35",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Working Facility Type HP.2"
            },
            {
              deuid: "pZph18i0E3N",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J35",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Working Facility Type HP.3"
            },
            {
              deuid: "pZph18i0E3N",
              cocuid: "Vy4zROU78hr",
              cell_no: "K35",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Working Facility Type HP.4"
            },
            {
              deuid: "pZph18i0E3N",
              cocuid: "SbearYuCfX5",
              cell_no: "L35",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Working Facility Type HP.5"
            },
            {
              deuid: "pZph18i0E3N",
              cocuid: "TCVfWydCsa4",
              cell_no: "M35",
              total: false,
              name:
                "Dental Prosthetic Technicians Stock By Working Facility Type HP.6"
            },
            {
              deuid: "OFsiDpAC34b",
              cocuid: "IMqululFzhP",
              cell_no: "E36",
              total: false,
              name: "Pharmacists Stock By HF Ownership Public"
            },
            {
              deuid: "OFsiDpAC34b",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F36",
              total: false,
              name: "Pharmacists Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "OFsiDpAC34b",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G36",
              total: false,
              name: "Pharmacists Stock By HF Ownership Private for profit"
            },
            {
              deuid: "wP7Lmrb01c3",
              cocuid: "p3raMKTiHsj",
              cell_no: "H36",
              total: false,
              name: "Pharmacists Stock By Working Facility Type HP.1"
            },
            {
              deuid: "wP7Lmrb01c3",
              cocuid: "DyPeahMx1ww",
              cell_no: "I36",
              total: false,
              name: "Pharmacists Stock By Working Facility Type HP.2"
            },
            {
              deuid: "wP7Lmrb01c3",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J36",
              total: false,
              name: "Pharmacists Stock By Working Facility Type HP.3"
            },
            {
              deuid: "wP7Lmrb01c3",
              cocuid: "Vy4zROU78hr",
              cell_no: "K36",
              total: false,
              name: "Pharmacists Stock By Working Facility Type HP.4"
            },
            {
              deuid: "wP7Lmrb01c3",
              cocuid: "SbearYuCfX5",
              cell_no: "L36",
              total: false,
              name: "Pharmacists Stock By Working Facility Type HP.5"
            },
            {
              deuid: "wP7Lmrb01c3",
              cocuid: "TCVfWydCsa4",
              cell_no: "M36",
              total: false,
              name: "Pharmacists Stock By Working Facility Type HP.6"
            },
            {
              deuid: "jzhphQ54S88",
              cocuid: "IMqululFzhP",
              cell_no: "E37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By HF Ownership Public"
            },
            {
              deuid: "jzhphQ54S88",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "jzhphQ54S88",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By HF Ownership Private for profit"
            },
            {
              deuid: "zgEzHh22TAi",
              cocuid: "p3raMKTiHsj",
              cell_no: "H37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Working Facility Type HP.1"
            },
            {
              deuid: "zgEzHh22TAi",
              cocuid: "DyPeahMx1ww",
              cell_no: "I37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Working Facility Type HP.2"
            },
            {
              deuid: "zgEzHh22TAi",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Working Facility Type HP.3"
            },
            {
              deuid: "zgEzHh22TAi",
              cocuid: "Vy4zROU78hr",
              cell_no: "K37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Working Facility Type HP.4"
            },
            {
              deuid: "zgEzHh22TAi",
              cocuid: "SbearYuCfX5",
              cell_no: "L37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Working Facility Type HP.5"
            },
            {
              deuid: "zgEzHh22TAi",
              cocuid: "TCVfWydCsa4",
              cell_no: "M37",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants Stock By Working Facility Type HP.6"
            },
            {
              deuid: "PUaHSbd6T5T",
              cocuid: "IMqululFzhP",
              cell_no: "E38",
              total: false,
              name: "Paramedical Practitioners Stock By HF Ownership Public"
            },
            {
              deuid: "PUaHSbd6T5T",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F38",
              total: false,
              name:
                "Paramedical Practitioners Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "PUaHSbd6T5T",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G38",
              total: false,
              name:
                "Paramedical Practitioners Stock By HF Ownership Private for profit"
            },
            {
              deuid: "atZNVujwdt4",
              cocuid: "p3raMKTiHsj",
              cell_no: "H38",
              total: false,
              name:
                "Paramedical Practitioners Stock By Working Facility Type HP.1"
            },
            {
              deuid: "atZNVujwdt4",
              cocuid: "DyPeahMx1ww",
              cell_no: "I38",
              total: false,
              name:
                "Paramedical Practitioners Stock By Working Facility Type HP.2"
            },
            {
              deuid: "atZNVujwdt4",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J38",
              total: false,
              name:
                "Paramedical Practitioners Stock By Working Facility Type HP.3"
            },
            {
              deuid: "atZNVujwdt4",
              cocuid: "Vy4zROU78hr",
              cell_no: "K38",
              total: false,
              name:
                "Paramedical Practitioners Stock By Working Facility Type HP.4"
            },
            {
              deuid: "atZNVujwdt4",
              cocuid: "SbearYuCfX5",
              cell_no: "L38",
              total: false,
              name:
                "Paramedical Practitioners Stock By Working Facility Type HP.5"
            },
            {
              deuid: "atZNVujwdt4",
              cocuid: "TCVfWydCsa4",
              cell_no: "M38",
              total: false,
              name:
                "Paramedical Practitioners Stock By Working Facility Type HP.6"
            },
            {
              deuid: "OMS7a4cxTLo",
              cocuid: "IMqululFzhP",
              cell_no: "E39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By HF Ownership Public"
            },
            {
              deuid: "OMS7a4cxTLo",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "OMS7a4cxTLo",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By HF Ownership Private for profit"
            },
            {
              deuid: "AtZVwbugSqv",
              cocuid: "p3raMKTiHsj",
              cell_no: "H39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Working Facility Type HP.1"
            },
            {
              deuid: "AtZVwbugSqv",
              cocuid: "DyPeahMx1ww",
              cell_no: "I39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Working Facility Type HP.2"
            },
            {
              deuid: "AtZVwbugSqv",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Working Facility Type HP.3"
            },
            {
              deuid: "AtZVwbugSqv",
              cocuid: "Vy4zROU78hr",
              cell_no: "K39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Working Facility Type HP.4"
            },
            {
              deuid: "AtZVwbugSqv",
              cocuid: "SbearYuCfX5",
              cell_no: "L39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Working Facility Type HP.5"
            },
            {
              deuid: "AtZVwbugSqv",
              cocuid: "TCVfWydCsa4",
              cell_no: "M39",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists Stock By Working Facility Type HP.6"
            },
            {
              deuid: "hH5gFw01p2g",
              cocuid: "IMqululFzhP",
              cell_no: "E40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By HF Ownership Public"
            },
            {
              deuid: "hH5gFw01p2g",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "hH5gFw01p2g",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By HF Ownership Private for profit"
            },
            {
              deuid: "J6Zk3SfpHfM",
              cocuid: "p3raMKTiHsj",
              cell_no: "H40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Working Facility Type HP.1"
            },
            {
              deuid: "J6Zk3SfpHfM",
              cocuid: "DyPeahMx1ww",
              cell_no: "I40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Working Facility Type HP.2"
            },
            {
              deuid: "J6Zk3SfpHfM",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Working Facility Type HP.3"
            },
            {
              deuid: "J6Zk3SfpHfM",
              cocuid: "Vy4zROU78hr",
              cell_no: "K40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Working Facility Type HP.4"
            },
            {
              deuid: "J6Zk3SfpHfM",
              cocuid: "SbearYuCfX5",
              cell_no: "L40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Working Facility Type HP.5"
            },
            {
              deuid: "J6Zk3SfpHfM",
              cocuid: "TCVfWydCsa4",
              cell_no: "M40",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians Stock By Working Facility Type HP.6"
            },
            {
              deuid: "QvnSCGMRuiV",
              cocuid: "IMqululFzhP",
              cell_no: "E41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By HF Ownership Public"
            },
            {
              deuid: "QvnSCGMRuiV",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "QvnSCGMRuiV",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By HF Ownership Private for profit"
            },
            {
              deuid: "u3t1gIXW3Bh",
              cocuid: "p3raMKTiHsj",
              cell_no: "H41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Working Facility Type HP.1"
            },
            {
              deuid: "u3t1gIXW3Bh",
              cocuid: "DyPeahMx1ww",
              cell_no: "I41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Working Facility Type HP.2"
            },
            {
              deuid: "u3t1gIXW3Bh",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Working Facility Type HP.3"
            },
            {
              deuid: "u3t1gIXW3Bh",
              cocuid: "Vy4zROU78hr",
              cell_no: "K41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Working Facility Type HP.4"
            },
            {
              deuid: "u3t1gIXW3Bh",
              cocuid: "SbearYuCfX5",
              cell_no: "L41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Working Facility Type HP.5"
            },
            {
              deuid: "u3t1gIXW3Bh",
              cocuid: "TCVfWydCsa4",
              cell_no: "M41",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  Stock By Working Facility Type HP.6"
            },
            {
              deuid: "UVmyzENvSiy",
              cocuid: "IMqululFzhP",
              cell_no: "E42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By HF Ownership Public"
            },
            {
              deuid: "UVmyzENvSiy",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "UVmyzENvSiy",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "rotANIe2GHX",
              cocuid: "p3raMKTiHsj",
              cell_no: "H42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "rotANIe2GHX",
              cocuid: "DyPeahMx1ww",
              cell_no: "I42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "rotANIe2GHX",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "rotANIe2GHX",
              cocuid: "Vy4zROU78hr",
              cell_no: "K42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "rotANIe2GHX",
              cocuid: "SbearYuCfX5",
              cell_no: "L42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "rotANIe2GHX",
              cocuid: "TCVfWydCsa4",
              cell_no: "M42",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "hYvVhwa2Frr",
              cocuid: "IMqululFzhP",
              cell_no: "E43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By HF Ownership Public"
            },
            {
              deuid: "hYvVhwa2Frr",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "hYvVhwa2Frr",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By HF Ownership Private for profit"
            },
            {
              deuid: "gybBvP7vbBl",
              cocuid: "p3raMKTiHsj",
              cell_no: "H43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Working Facility Type HP.1"
            },
            {
              deuid: "gybBvP7vbBl",
              cocuid: "DyPeahMx1ww",
              cell_no: "I43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Working Facility Type HP.2"
            },
            {
              deuid: "gybBvP7vbBl",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Working Facility Type HP.3"
            },
            {
              deuid: "gybBvP7vbBl",
              cocuid: "Vy4zROU78hr",
              cell_no: "K43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Working Facility Type HP.4"
            },
            {
              deuid: "gybBvP7vbBl",
              cocuid: "SbearYuCfX5",
              cell_no: "L43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Working Facility Type HP.5"
            },
            {
              deuid: "gybBvP7vbBl",
              cocuid: "TCVfWydCsa4",
              cell_no: "M43",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates Stock By Working Facility Type HP.6"
            },
            {
              deuid: "CPmuUXWouRA",
              cocuid: "IMqululFzhP",
              cell_no: "E44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By HF Ownership Public"
            },
            {
              deuid: "CPmuUXWouRA",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "CPmuUXWouRA",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "rsyymElP56r",
              cocuid: "p3raMKTiHsj",
              cell_no: "H44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "rsyymElP56r",
              cocuid: "DyPeahMx1ww",
              cell_no: "I44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "rsyymElP56r",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "rsyymElP56r",
              cocuid: "Vy4zROU78hr",
              cell_no: "K44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "rsyymElP56r",
              cocuid: "SbearYuCfX5",
              cell_no: "L44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "rsyymElP56r",
              cocuid: "TCVfWydCsa4",
              cell_no: "M44",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "h0mNqlvj5B0",
              cocuid: "IMqululFzhP",
              cell_no: "E45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By HF Ownership Public"
            },
            {
              deuid: "h0mNqlvj5B0",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "h0mNqlvj5B0",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "uuHjvQ3uSjS",
              cocuid: "p3raMKTiHsj",
              cell_no: "H45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "uuHjvQ3uSjS",
              cocuid: "DyPeahMx1ww",
              cell_no: "I45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "uuHjvQ3uSjS",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "uuHjvQ3uSjS",
              cocuid: "Vy4zROU78hr",
              cell_no: "K45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "uuHjvQ3uSjS",
              cocuid: "SbearYuCfX5",
              cell_no: "L45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "uuHjvQ3uSjS",
              cocuid: "TCVfWydCsa4",
              cell_no: "M45",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "blaeng4GF8s",
              cocuid: "IMqululFzhP",
              cell_no: "E46",
              total: false,
              name: "Community Health Workers Stock By HF Ownership Public"
            },
            {
              deuid: "blaeng4GF8s",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F46",
              total: false,
              name:
                "Community Health Workers Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "blaeng4GF8s",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G46",
              total: false,
              name:
                "Community Health Workers Stock By HF Ownership Private for profit"
            },
            {
              deuid: "ugQXiXF3q1v",
              cocuid: "p3raMKTiHsj",
              cell_no: "H46",
              total: false,
              name:
                "Community Health Workers Stock By Working Facility Type HP.1"
            },
            {
              deuid: "ugQXiXF3q1v",
              cocuid: "DyPeahMx1ww",
              cell_no: "I46",
              total: false,
              name:
                "Community Health Workers Stock By Working Facility Type HP.2"
            },
            {
              deuid: "ugQXiXF3q1v",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J46",
              total: false,
              name:
                "Community Health Workers Stock By Working Facility Type HP.3"
            },
            {
              deuid: "ugQXiXF3q1v",
              cocuid: "Vy4zROU78hr",
              cell_no: "K46",
              total: false,
              name:
                "Community Health Workers Stock By Working Facility Type HP.4"
            },
            {
              deuid: "ugQXiXF3q1v",
              cocuid: "SbearYuCfX5",
              cell_no: "L46",
              total: false,
              name:
                "Community Health Workers Stock By Working Facility Type HP.5"
            },
            {
              deuid: "ugQXiXF3q1v",
              cocuid: "TCVfWydCsa4",
              cell_no: "M46",
              total: false,
              name:
                "Community Health Workers Stock By Working Facility Type HP.6"
            },
            {
              deuid: "wJ4GvUwxS9G",
              cocuid: "IMqululFzhP",
              cell_no: "E47",
              total: false,
              name: "Personal care workers Stock By HF Ownership Public"
            },
            {
              deuid: "wJ4GvUwxS9G",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F47",
              total: false,
              name:
                "Personal care workers Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "wJ4GvUwxS9G",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G47",
              total: false,
              name:
                "Personal care workers Stock By HF Ownership Private for profit"
            },
            {
              deuid: "vtjakFLImYg",
              cocuid: "p3raMKTiHsj",
              cell_no: "H47",
              total: false,
              name: "Personal care workers Stock By Working Facility Type HP.1"
            },
            {
              deuid: "vtjakFLImYg",
              cocuid: "DyPeahMx1ww",
              cell_no: "I47",
              total: false,
              name: "Personal care workers Stock By Working Facility Type HP.2"
            },
            {
              deuid: "vtjakFLImYg",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J47",
              total: false,
              name: "Personal care workers Stock By Working Facility Type HP.3"
            },
            {
              deuid: "vtjakFLImYg",
              cocuid: "Vy4zROU78hr",
              cell_no: "K47",
              total: false,
              name: "Personal care workers Stock By Working Facility Type HP.4"
            },
            {
              deuid: "vtjakFLImYg",
              cocuid: "SbearYuCfX5",
              cell_no: "L47",
              total: false,
              name: "Personal care workers Stock By Working Facility Type HP.5"
            },
            {
              deuid: "vtjakFLImYg",
              cocuid: "TCVfWydCsa4",
              cell_no: "M47",
              total: false,
              name: "Personal care workers Stock By Working Facility Type HP.6"
            },
            {
              deuid: "BnCaf6ZXM1P",
              cocuid: "IMqululFzhP",
              cell_no: "E48",
              total: false,
              name: "Health Care Assistants Stock By HF Ownership Public"
            },
            {
              deuid: "BnCaf6ZXM1P",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F48",
              total: false,
              name:
                "Health Care Assistants Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "BnCaf6ZXM1P",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G48",
              total: false,
              name:
                "Health Care Assistants Stock By HF Ownership Private for profit"
            },
            {
              deuid: "a0csXCPXx1W",
              cocuid: "p3raMKTiHsj",
              cell_no: "H48",
              total: false,
              name: "Health Care Assistants Stock By Working Facility Type HP.1"
            },
            {
              deuid: "a0csXCPXx1W",
              cocuid: "DyPeahMx1ww",
              cell_no: "I48",
              total: false,
              name: "Health Care Assistants Stock By Working Facility Type HP.2"
            },
            {
              deuid: "a0csXCPXx1W",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J48",
              total: false,
              name: "Health Care Assistants Stock By Working Facility Type HP.3"
            },
            {
              deuid: "a0csXCPXx1W",
              cocuid: "Vy4zROU78hr",
              cell_no: "K48",
              total: false,
              name: "Health Care Assistants Stock By Working Facility Type HP.4"
            },
            {
              deuid: "a0csXCPXx1W",
              cocuid: "SbearYuCfX5",
              cell_no: "L48",
              total: false,
              name: "Health Care Assistants Stock By Working Facility Type HP.5"
            },
            {
              deuid: "a0csXCPXx1W",
              cocuid: "TCVfWydCsa4",
              cell_no: "M48",
              total: false,
              name: "Health Care Assistants Stock By Working Facility Type HP.6"
            },
            {
              deuid: "EEZGLQRHQDr",
              cocuid: "IMqululFzhP",
              cell_no: "E49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By HF Ownership Public"
            },
            {
              deuid: "EEZGLQRHQDr",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "EEZGLQRHQDr",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By HF Ownership Private for profit"
            },
            {
              deuid: "Sbk9iH85Ltm",
              cocuid: "p3raMKTiHsj",
              cell_no: "H49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Working Facility Type HP.1"
            },
            {
              deuid: "Sbk9iH85Ltm",
              cocuid: "DyPeahMx1ww",
              cell_no: "I49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Working Facility Type HP.2"
            },
            {
              deuid: "Sbk9iH85Ltm",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Working Facility Type HP.3"
            },
            {
              deuid: "Sbk9iH85Ltm",
              cocuid: "Vy4zROU78hr",
              cell_no: "K49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Working Facility Type HP.4"
            },
            {
              deuid: "Sbk9iH85Ltm",
              cocuid: "SbearYuCfX5",
              cell_no: "L49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Working Facility Type HP.5"
            },
            {
              deuid: "Sbk9iH85Ltm",
              cocuid: "TCVfWydCsa4",
              cell_no: "M49",
              total: false,
              name:
                "Home-based Personal Care Workers Stock By Working Facility Type HP.6"
            },
            {
              deuid: "j9SOCeGryr9",
              cocuid: "IMqululFzhP",
              cell_no: "E50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By HF Ownership Public"
            },
            {
              deuid: "j9SOCeGryr9",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "j9SOCeGryr9",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By HF Ownership Private for profit"
            },
            {
              deuid: "G34jrX7TcVv",
              cocuid: "p3raMKTiHsj",
              cell_no: "H50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Working Facility Type HP.1"
            },
            {
              deuid: "G34jrX7TcVv",
              cocuid: "DyPeahMx1ww",
              cell_no: "I50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Working Facility Type HP.2"
            },
            {
              deuid: "G34jrX7TcVv",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Working Facility Type HP.3"
            },
            {
              deuid: "G34jrX7TcVv",
              cocuid: "Vy4zROU78hr",
              cell_no: "K50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Working Facility Type HP.4"
            },
            {
              deuid: "G34jrX7TcVv",
              cocuid: "SbearYuCfX5",
              cell_no: "L50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Working Facility Type HP.5"
            },
            {
              deuid: "G34jrX7TcVv",
              cocuid: "TCVfWydCsa4",
              cell_no: "M50",
              total: false,
              name:
                "Personal care workers in health services n.e.c Stock By Working Facility Type HP.6"
            },
            {
              deuid: "RCcjOgia5lC",
              cocuid: "IMqululFzhP",
              cell_no: "E51",
              total: false,
              name: "Physiotherapists Stock By HF Ownership Public"
            },
            {
              deuid: "RCcjOgia5lC",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F51",
              total: false,
              name:
                "Physiotherapists Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "RCcjOgia5lC",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G51",
              total: false,
              name: "Physiotherapists Stock By HF Ownership Private for profit"
            },
            {
              deuid: "aZKKBa26tmF",
              cocuid: "p3raMKTiHsj",
              cell_no: "H51",
              total: false,
              name: "Physiotherapists Stock By Working Facility Type HP.1"
            },
            {
              deuid: "aZKKBa26tmF",
              cocuid: "DyPeahMx1ww",
              cell_no: "I51",
              total: false,
              name: "Physiotherapists Stock By Working Facility Type HP.2"
            },
            {
              deuid: "aZKKBa26tmF",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J51",
              total: false,
              name: "Physiotherapists Stock By Working Facility Type HP.3"
            },
            {
              deuid: "aZKKBa26tmF",
              cocuid: "Vy4zROU78hr",
              cell_no: "K51",
              total: false,
              name: "Physiotherapists Stock By Working Facility Type HP.4"
            },
            {
              deuid: "aZKKBa26tmF",
              cocuid: "SbearYuCfX5",
              cell_no: "L51",
              total: false,
              name: "Physiotherapists Stock By Working Facility Type HP.5"
            },
            {
              deuid: "aZKKBa26tmF",
              cocuid: "TCVfWydCsa4",
              cell_no: "M51",
              total: false,
              name: "Physiotherapists Stock By Working Facility Type HP.6"
            },
            {
              deuid: "bq00aLH9OPk",
              cocuid: "IMqululFzhP",
              cell_no: "E52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By HF Ownership Public"
            },
            {
              deuid: "bq00aLH9OPk",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "bq00aLH9OPk",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By HF Ownership Private for profit"
            },
            {
              deuid: "O2vEtUZRIRh",
              cocuid: "p3raMKTiHsj",
              cell_no: "H52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Working Facility Type HP.1"
            },
            {
              deuid: "O2vEtUZRIRh",
              cocuid: "DyPeahMx1ww",
              cell_no: "I52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Working Facility Type HP.2"
            },
            {
              deuid: "O2vEtUZRIRh",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Working Facility Type HP.3"
            },
            {
              deuid: "O2vEtUZRIRh",
              cocuid: "Vy4zROU78hr",
              cell_no: "K52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Working Facility Type HP.4"
            },
            {
              deuid: "O2vEtUZRIRh",
              cocuid: "SbearYuCfX5",
              cell_no: "L52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Working Facility Type HP.5"
            },
            {
              deuid: "O2vEtUZRIRh",
              cocuid: "TCVfWydCsa4",
              cell_no: "M52",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants Stock By Working Facility Type HP.6"
            },
            {
              deuid: "J8m9vtLVo2G",
              cocuid: "IMqululFzhP",
              cell_no: "E53",
              total: false,
              name: "Dieticians  Stock By HF Ownership Public"
            },
            {
              deuid: "J8m9vtLVo2G",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F53",
              total: false,
              name: "Dieticians  Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "J8m9vtLVo2G",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G53",
              total: false,
              name: "Dieticians  Stock By HF Ownership Private for profit"
            },
            {
              deuid: "kv8QLREJZk6",
              cocuid: "p3raMKTiHsj",
              cell_no: "H53",
              total: false,
              name: "Dieticians  Stock By Working Facility Type HP.1"
            },
            {
              deuid: "kv8QLREJZk6",
              cocuid: "DyPeahMx1ww",
              cell_no: "I53",
              total: false,
              name: "Dieticians  Stock By Working Facility Type HP.2"
            },
            {
              deuid: "kv8QLREJZk6",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J53",
              total: false,
              name: "Dieticians  Stock By Working Facility Type HP.3"
            },
            {
              deuid: "kv8QLREJZk6",
              cocuid: "Vy4zROU78hr",
              cell_no: "K53",
              total: false,
              name: "Dieticians  Stock By Working Facility Type HP.4"
            },
            {
              deuid: "kv8QLREJZk6",
              cocuid: "SbearYuCfX5",
              cell_no: "L53",
              total: false,
              name: "Dieticians  Stock By Working Facility Type HP.5"
            },
            {
              deuid: "kv8QLREJZk6",
              cocuid: "TCVfWydCsa4",
              cell_no: "M53",
              total: false,
              name: "Dieticians  Stock By Working Facility Type HP.6"
            },
            {
              deuid: "TRB0RlFABNw",
              cocuid: "IMqululFzhP",
              cell_no: "E54",
              total: false,
              name: "Nutritionists Stock By HF Ownership Public"
            },
            {
              deuid: "TRB0RlFABNw",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F54",
              total: false,
              name: "Nutritionists Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "TRB0RlFABNw",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G54",
              total: false,
              name: "Nutritionists Stock By HF Ownership Private for profit"
            },
            {
              deuid: "l6nbxFm0CO4",
              cocuid: "p3raMKTiHsj",
              cell_no: "H54",
              total: false,
              name: "Nutritionists Stock By Working Facility Type HP.1"
            },
            {
              deuid: "l6nbxFm0CO4",
              cocuid: "DyPeahMx1ww",
              cell_no: "I54",
              total: false,
              name: "Nutritionists Stock By Working Facility Type HP.2"
            },
            {
              deuid: "l6nbxFm0CO4",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J54",
              total: false,
              name: "Nutritionists Stock By Working Facility Type HP.3"
            },
            {
              deuid: "l6nbxFm0CO4",
              cocuid: "Vy4zROU78hr",
              cell_no: "K54",
              total: false,
              name: "Nutritionists Stock By Working Facility Type HP.4"
            },
            {
              deuid: "l6nbxFm0CO4",
              cocuid: "SbearYuCfX5",
              cell_no: "L54",
              total: false,
              name: "Nutritionists Stock By Working Facility Type HP.5"
            },
            {
              deuid: "l6nbxFm0CO4",
              cocuid: "TCVfWydCsa4",
              cell_no: "M54",
              total: false,
              name: "Nutritionists Stock By Working Facility Type HP.6"
            },
            {
              deuid: "m5vdq5UM3B2",
              cocuid: "IMqululFzhP",
              cell_no: "E55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By HF Ownership Public"
            },
            {
              deuid: "m5vdq5UM3B2",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "m5vdq5UM3B2",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By HF Ownership Private for profit"
            },
            {
              deuid: "MlBtet7M3rs",
              cocuid: "p3raMKTiHsj",
              cell_no: "H55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Working Facility Type HP.1"
            },
            {
              deuid: "MlBtet7M3rs",
              cocuid: "DyPeahMx1ww",
              cell_no: "I55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Working Facility Type HP.2"
            },
            {
              deuid: "MlBtet7M3rs",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Working Facility Type HP.3"
            },
            {
              deuid: "MlBtet7M3rs",
              cocuid: "Vy4zROU78hr",
              cell_no: "K55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Working Facility Type HP.4"
            },
            {
              deuid: "MlBtet7M3rs",
              cocuid: "SbearYuCfX5",
              cell_no: "L55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Working Facility Type HP.5"
            },
            {
              deuid: "MlBtet7M3rs",
              cocuid: "TCVfWydCsa4",
              cell_no: "M55",
              total: false,
              name:
                "Audiologists and Speech Therapists Stock By Working Facility Type HP.6"
            },
            {
              deuid: "Zu69ozCInhL",
              cocuid: "IMqululFzhP",
              cell_no: "E56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By HF Ownership Public"
            },
            {
              deuid: "Zu69ozCInhL",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "Zu69ozCInhL",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By HF Ownership Private for profit"
            },
            {
              deuid: "ViLbVtzGWM5",
              cocuid: "p3raMKTiHsj",
              cell_no: "H56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Working Facility Type HP.1"
            },
            {
              deuid: "ViLbVtzGWM5",
              cocuid: "DyPeahMx1ww",
              cell_no: "I56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Working Facility Type HP.2"
            },
            {
              deuid: "ViLbVtzGWM5",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Working Facility Type HP.3"
            },
            {
              deuid: "ViLbVtzGWM5",
              cocuid: "Vy4zROU78hr",
              cell_no: "K56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Working Facility Type HP.4"
            },
            {
              deuid: "ViLbVtzGWM5",
              cocuid: "SbearYuCfX5",
              cell_no: "L56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Working Facility Type HP.5"
            },
            {
              deuid: "ViLbVtzGWM5",
              cocuid: "TCVfWydCsa4",
              cell_no: "M56",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians Stock By Working Facility Type HP.6"
            },
            {
              deuid: "UcfAgoEEjT2",
              cocuid: "IMqululFzhP",
              cell_no: "E57",
              total: false,
              name: "Dispensing Opticians Stock By HF Ownership Public"
            },
            {
              deuid: "UcfAgoEEjT2",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F57",
              total: false,
              name:
                "Dispensing Opticians Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "UcfAgoEEjT2",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G57",
              total: false,
              name:
                "Dispensing Opticians Stock By HF Ownership Private for profit"
            },
            {
              deuid: "bs0ARZBxDgC",
              cocuid: "p3raMKTiHsj",
              cell_no: "H57",
              total: false,
              name: "Dispensing Opticians Stock By Working Facility Type HP.1"
            },
            {
              deuid: "bs0ARZBxDgC",
              cocuid: "DyPeahMx1ww",
              cell_no: "I57",
              total: false,
              name: "Dispensing Opticians Stock By Working Facility Type HP.2"
            },
            {
              deuid: "bs0ARZBxDgC",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J57",
              total: false,
              name: "Dispensing Opticians Stock By Working Facility Type HP.3"
            },
            {
              deuid: "bs0ARZBxDgC",
              cocuid: "Vy4zROU78hr",
              cell_no: "K57",
              total: false,
              name: "Dispensing Opticians Stock By Working Facility Type HP.4"
            },
            {
              deuid: "bs0ARZBxDgC",
              cocuid: "SbearYuCfX5",
              cell_no: "L57",
              total: false,
              name: "Dispensing Opticians Stock By Working Facility Type HP.5"
            },
            {
              deuid: "bs0ARZBxDgC",
              cocuid: "TCVfWydCsa4",
              cell_no: "M57",
              total: false,
              name: "Dispensing Opticians Stock By Working Facility Type HP.6"
            },
            {
              deuid: "nWqgnOkihzf",
              cocuid: "IMqululFzhP",
              cell_no: "E58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By HF Ownership Public"
            },
            {
              deuid: "nWqgnOkihzf",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "nWqgnOkihzf",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By HF Ownership Private for profit"
            },
            {
              deuid: "cIyw7ChjlgG",
              cocuid: "p3raMKTiHsj",
              cell_no: "H58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Working Facility Type HP.1"
            },
            {
              deuid: "cIyw7ChjlgG",
              cocuid: "DyPeahMx1ww",
              cell_no: "I58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Working Facility Type HP.2"
            },
            {
              deuid: "cIyw7ChjlgG",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Working Facility Type HP.3"
            },
            {
              deuid: "cIyw7ChjlgG",
              cocuid: "Vy4zROU78hr",
              cell_no: "K58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Working Facility Type HP.4"
            },
            {
              deuid: "cIyw7ChjlgG",
              cocuid: "SbearYuCfX5",
              cell_no: "L58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Working Facility Type HP.5"
            },
            {
              deuid: "cIyw7ChjlgG",
              cocuid: "TCVfWydCsa4",
              cell_no: "M58",
              total: false,
              name:
                "Medical Prosthetic Technicians Stock By Working Facility Type HP.6"
            },
            {
              deuid: "Fgp2erpoOMQ",
              cocuid: "IMqululFzhP",
              cell_no: "E59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By HF Ownership Public"
            },
            {
              deuid: "Fgp2erpoOMQ",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "Fgp2erpoOMQ",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By HF Ownership Private for profit"
            },
            {
              deuid: "lduI45hYMv5",
              cocuid: "p3raMKTiHsj",
              cell_no: "H59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Working Facility Type HP.1"
            },
            {
              deuid: "lduI45hYMv5",
              cocuid: "DyPeahMx1ww",
              cell_no: "I59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Working Facility Type HP.2"
            },
            {
              deuid: "lduI45hYMv5",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Working Facility Type HP.3"
            },
            {
              deuid: "lduI45hYMv5",
              cocuid: "Vy4zROU78hr",
              cell_no: "K59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Working Facility Type HP.4"
            },
            {
              deuid: "lduI45hYMv5",
              cocuid: "SbearYuCfX5",
              cell_no: "L59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Working Facility Type HP.5"
            },
            {
              deuid: "lduI45hYMv5",
              cocuid: "TCVfWydCsa4",
              cell_no: "M59",
              total: false,
              name:
                "Medical Records and Health Information Technicians Stock By Working Facility Type HP.6"
            },
            {
              deuid: "DqZNrSSZ2S0",
              cocuid: "IMqululFzhP",
              cell_no: "E60",
              total: false,
              name: "Medical Assistants Stock By HF Ownership Public"
            },
            {
              deuid: "DqZNrSSZ2S0",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F60",
              total: false,
              name:
                "Medical Assistants Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "DqZNrSSZ2S0",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G60",
              total: false,
              name:
                "Medical Assistants Stock By HF Ownership Private for profit"
            },
            {
              deuid: "ahER1ix3fxr",
              cocuid: "p3raMKTiHsj",
              cell_no: "H60",
              total: false,
              name: "Medical Assistants Stock By Working Facility Type HP.1"
            },
            {
              deuid: "ahER1ix3fxr",
              cocuid: "DyPeahMx1ww",
              cell_no: "I60",
              total: false,
              name: "Medical Assistants Stock By Working Facility Type HP.2"
            },
            {
              deuid: "ahER1ix3fxr",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J60",
              total: false,
              name: "Medical Assistants Stock By Working Facility Type HP.3"
            },
            {
              deuid: "ahER1ix3fxr",
              cocuid: "Vy4zROU78hr",
              cell_no: "K60",
              total: false,
              name: "Medical Assistants Stock By Working Facility Type HP.4"
            },
            {
              deuid: "ahER1ix3fxr",
              cocuid: "SbearYuCfX5",
              cell_no: "L60",
              total: false,
              name: "Medical Assistants Stock By Working Facility Type HP.5"
            },
            {
              deuid: "ahER1ix3fxr",
              cocuid: "TCVfWydCsa4",
              cell_no: "M60",
              total: false,
              name: "Medical Assistants Stock By Working Facility Type HP.6"
            },
            {
              deuid: "WAA3Uun62pk",
              cocuid: "IMqululFzhP",
              cell_no: "E61",
              total: false,
              name: "Ambulance Workers Stock By HF Ownership Public"
            },
            {
              deuid: "WAA3Uun62pk",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F61",
              total: false,
              name:
                "Ambulance Workers Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "WAA3Uun62pk",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G61",
              total: false,
              name: "Ambulance Workers Stock By HF Ownership Private for profit"
            },
            {
              deuid: "MIa6TVKj2xo",
              cocuid: "p3raMKTiHsj",
              cell_no: "H61",
              total: false,
              name: "Ambulance Workers Stock By Working Facility Type HP.1"
            },
            {
              deuid: "MIa6TVKj2xo",
              cocuid: "DyPeahMx1ww",
              cell_no: "I61",
              total: false,
              name: "Ambulance Workers Stock By Working Facility Type HP.2"
            },
            {
              deuid: "MIa6TVKj2xo",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J61",
              total: false,
              name: "Ambulance Workers Stock By Working Facility Type HP.3"
            },
            {
              deuid: "MIa6TVKj2xo",
              cocuid: "Vy4zROU78hr",
              cell_no: "K61",
              total: false,
              name: "Ambulance Workers Stock By Working Facility Type HP.4"
            },
            {
              deuid: "MIa6TVKj2xo",
              cocuid: "SbearYuCfX5",
              cell_no: "L61",
              total: false,
              name: "Ambulance Workers Stock By Working Facility Type HP.5"
            },
            {
              deuid: "MIa6TVKj2xo",
              cocuid: "TCVfWydCsa4",
              cell_no: "M61",
              total: false,
              name: "Ambulance Workers Stock By Working Facility Type HP.6"
            },
            {
              deuid: "s92LZ9RuhaG",
              cocuid: "IMqululFzhP",
              cell_no: "E62",
              total: false,
              name:
                "Social work and counselling professionals Stock By HF Ownership Public"
            },
            {
              deuid: "s92LZ9RuhaG",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F62",
              total: false,
              name:
                "Social work and counselling professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "s92LZ9RuhaG",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G62",
              total: false,
              name:
                "Social work and counselling professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "U30oYXdSWTe",
              cocuid: "p3raMKTiHsj",
              cell_no: "H62",
              total: false,
              name:
                "Social work and counselling professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "U30oYXdSWTe",
              cocuid: "DyPeahMx1ww",
              cell_no: "I62",
              total: false,
              name:
                "Social work and counselling professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "U30oYXdSWTe",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J62",
              total: false,
              name:
                "Social work and counselling professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "U30oYXdSWTe",
              cocuid: "Vy4zROU78hr",
              cell_no: "K62",
              total: false,
              name:
                "Social work and counselling professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "U30oYXdSWTe",
              cocuid: "SbearYuCfX5",
              cell_no: "L62",
              total: false,
              name:
                "Social work and counselling professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "U30oYXdSWTe",
              cocuid: "TCVfWydCsa4",
              cell_no: "M62",
              total: false,
              name:
                "Social work and counselling professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "viM9AeYtFV6",
              cocuid: "IMqululFzhP",
              cell_no: "E63",
              total: false,
              name:
                "Social work associate professionals Stock By HF Ownership Public"
            },
            {
              deuid: "viM9AeYtFV6",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F63",
              total: false,
              name:
                "Social work associate professionals Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "viM9AeYtFV6",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G63",
              total: false,
              name:
                "Social work associate professionals Stock By HF Ownership Private for profit"
            },
            {
              deuid: "Tp6ETHHL2va",
              cocuid: "p3raMKTiHsj",
              cell_no: "H63",
              total: false,
              name:
                "Social work associate professionals Stock By Working Facility Type HP.1"
            },
            {
              deuid: "Tp6ETHHL2va",
              cocuid: "DyPeahMx1ww",
              cell_no: "I63",
              total: false,
              name:
                "Social work associate professionals Stock By Working Facility Type HP.2"
            },
            {
              deuid: "Tp6ETHHL2va",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J63",
              total: false,
              name:
                "Social work associate professionals Stock By Working Facility Type HP.3"
            },
            {
              deuid: "Tp6ETHHL2va",
              cocuid: "Vy4zROU78hr",
              cell_no: "K63",
              total: false,
              name:
                "Social work associate professionals Stock By Working Facility Type HP.4"
            },
            {
              deuid: "Tp6ETHHL2va",
              cocuid: "SbearYuCfX5",
              cell_no: "L63",
              total: false,
              name:
                "Social work associate professionals Stock By Working Facility Type HP.5"
            },
            {
              deuid: "Tp6ETHHL2va",
              cocuid: "TCVfWydCsa4",
              cell_no: "M63",
              total: false,
              name:
                "Social work associate professionals Stock By Working Facility Type HP.6"
            },
            {
              deuid: "PtCFMK7nBkR",
              cocuid: "IMqululFzhP",
              cell_no: "E64",
              total: false,
              name: "Biomedical engineer Stock By HF Ownership Public"
            },
            {
              deuid: "PtCFMK7nBkR",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F64",
              total: false,
              name:
                "Biomedical engineer Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "PtCFMK7nBkR",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G64",
              total: false,
              name:
                "Biomedical engineer Stock By HF Ownership Private for profit"
            },
            {
              deuid: "K3UcvN3sbDf",
              cocuid: "p3raMKTiHsj",
              cell_no: "H64",
              total: false,
              name: "Biomedical engineer Stock By Working Facility Type HP.1"
            },
            {
              deuid: "K3UcvN3sbDf",
              cocuid: "DyPeahMx1ww",
              cell_no: "I64",
              total: false,
              name: "Biomedical engineer Stock By Working Facility Type HP.2"
            },
            {
              deuid: "K3UcvN3sbDf",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J64",
              total: false,
              name: "Biomedical engineer Stock By Working Facility Type HP.3"
            },
            {
              deuid: "K3UcvN3sbDf",
              cocuid: "Vy4zROU78hr",
              cell_no: "K64",
              total: false,
              name: "Biomedical engineer Stock By Working Facility Type HP.4"
            },
            {
              deuid: "K3UcvN3sbDf",
              cocuid: "SbearYuCfX5",
              cell_no: "L64",
              total: false,
              name: "Biomedical engineer Stock By Working Facility Type HP.5"
            },
            {
              deuid: "K3UcvN3sbDf",
              cocuid: "TCVfWydCsa4",
              cell_no: "M64",
              total: false,
              name: "Biomedical engineer Stock By Working Facility Type HP.6"
            },
            {
              deuid: "rr5X0uhJKl5",
              cocuid: "IMqululFzhP",
              cell_no: "E65",
              total: false,
              name: "Psychologists Stock By HF Ownership Public"
            },
            {
              deuid: "rr5X0uhJKl5",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F65",
              total: false,
              name: "Psychologists Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "rr5X0uhJKl5",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G65",
              total: false,
              name: "Psychologists Stock By HF Ownership Private for profit"
            },
            {
              deuid: "hhiYH7hH3xx",
              cocuid: "p3raMKTiHsj",
              cell_no: "H65",
              total: false,
              name: "Psychologists Stock By Working Facility Type HP.1"
            },
            {
              deuid: "hhiYH7hH3xx",
              cocuid: "DyPeahMx1ww",
              cell_no: "I65",
              total: false,
              name: "Psychologists Stock By Working Facility Type HP.2"
            },
            {
              deuid: "hhiYH7hH3xx",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J65",
              total: false,
              name: "Psychologists Stock By Working Facility Type HP.3"
            },
            {
              deuid: "hhiYH7hH3xx",
              cocuid: "Vy4zROU78hr",
              cell_no: "K65",
              total: false,
              name: "Psychologists Stock By Working Facility Type HP.4"
            },
            {
              deuid: "hhiYH7hH3xx",
              cocuid: "SbearYuCfX5",
              cell_no: "L65",
              total: false,
              name: "Psychologists Stock By Working Facility Type HP.5"
            },
            {
              deuid: "hhiYH7hH3xx",
              cocuid: "TCVfWydCsa4",
              cell_no: "M65",
              total: false,
              name: "Psychologists Stock By Working Facility Type HP.6"
            },
            {
              deuid: "y18n64afzoH",
              cocuid: "IMqululFzhP",
              cell_no: "E66",
              total: false,
              name: "Medical secretaries stock By HF Ownership Public"
            },
            {
              deuid: "y18n64afzoH",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F66",
              total: false,
              name:
                "Medical secretaries stock By HF Ownership Private not for profit"
            },
            {
              deuid: "y18n64afzoH",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G66",
              total: false,
              name:
                "Medical secretaries stock By HF Ownership Private for profit"
            },
            {
              deuid: "QLqvnN57uaj",
              cocuid: "p3raMKTiHsj",
              cell_no: "H66",
              total: false,
              name: "Medical secretaries stock By Working Facility Type HP.1"
            },
            {
              deuid: "QLqvnN57uaj",
              cocuid: "DyPeahMx1ww",
              cell_no: "I66",
              total: false,
              name: "Medical secretaries stock By Working Facility Type HP.2"
            },
            {
              deuid: "QLqvnN57uaj",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J66",
              total: false,
              name: "Medical secretaries stock By Working Facility Type HP.3"
            },
            {
              deuid: "QLqvnN57uaj",
              cocuid: "Vy4zROU78hr",
              cell_no: "K66",
              total: false,
              name: "Medical secretaries stock By Working Facility Type HP.4"
            },
            {
              deuid: "QLqvnN57uaj",
              cocuid: "SbearYuCfX5",
              cell_no: "L66",
              total: false,
              name: "Medical secretaries stock By Working Facility Type HP.5"
            },
            {
              deuid: "QLqvnN57uaj",
              cocuid: "TCVfWydCsa4",
              cell_no: "M66",
              total: false,
              name: "Medical secretaries stock By Working Facility Type HP.6"
            },
            {
              deuid: "OfROf5GmY2U",
              cocuid: "IMqululFzhP",
              cell_no: "E67",
              total: false,
              name: "Managerial staff Stock By HF Ownership Public"
            },
            {
              deuid: "OfROf5GmY2U",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F67",
              total: false,
              name:
                "Managerial staff Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "OfROf5GmY2U",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G67",
              total: false,
              name: "Managerial staff Stock By HF Ownership Private for profit"
            },
            {
              deuid: "XyCaF8fUivl",
              cocuid: "p3raMKTiHsj",
              cell_no: "H67",
              total: false,
              name: "Managerial staff Stock By Working Facility Type HP.1"
            },
            {
              deuid: "XyCaF8fUivl",
              cocuid: "DyPeahMx1ww",
              cell_no: "I67",
              total: false,
              name: "Managerial staff Stock By Working Facility Type HP.2"
            },
            {
              deuid: "XyCaF8fUivl",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J67",
              total: false,
              name: "Managerial staff Stock By Working Facility Type HP.3"
            },
            {
              deuid: "XyCaF8fUivl",
              cocuid: "Vy4zROU78hr",
              cell_no: "K67",
              total: false,
              name: "Managerial staff Stock By Working Facility Type HP.4"
            },
            {
              deuid: "XyCaF8fUivl",
              cocuid: "SbearYuCfX5",
              cell_no: "L67",
              total: false,
              name: "Managerial staff Stock By Working Facility Type HP.5"
            },
            {
              deuid: "XyCaF8fUivl",
              cocuid: "TCVfWydCsa4",
              cell_no: "M67",
              total: false,
              name: "Managerial staff Stock By Working Facility Type HP.6"
            },
            {
              deuid: "uqzqgaYByJq",
              cocuid: "IMqululFzhP",
              cell_no: "E68",
              total: false,
              name: "Administrative staff Stock By HF Ownership Public"
            },
            {
              deuid: "uqzqgaYByJq",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F68",
              total: false,
              name:
                "Administrative staff Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "uqzqgaYByJq",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G68",
              total: false,
              name:
                "Administrative staff Stock By HF Ownership Private for profit"
            },
            {
              deuid: "smlHQk2gqIf",
              cocuid: "p3raMKTiHsj",
              cell_no: "H68",
              total: false,
              name: "Administrative staff Stock By Working Facility Type HP.1"
            },
            {
              deuid: "smlHQk2gqIf",
              cocuid: "DyPeahMx1ww",
              cell_no: "I68",
              total: false,
              name: "Administrative staff Stock By Working Facility Type HP.2"
            },
            {
              deuid: "smlHQk2gqIf",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J68",
              total: false,
              name: "Administrative staff Stock By Working Facility Type HP.3"
            },
            {
              deuid: "smlHQk2gqIf",
              cocuid: "Vy4zROU78hr",
              cell_no: "K68",
              total: false,
              name: "Administrative staff Stock By Working Facility Type HP.4"
            },
            {
              deuid: "smlHQk2gqIf",
              cocuid: "SbearYuCfX5",
              cell_no: "L68",
              total: false,
              name: "Administrative staff Stock By Working Facility Type HP.5"
            },
            {
              deuid: "smlHQk2gqIf",
              cocuid: "TCVfWydCsa4",
              cell_no: "M68",
              total: false,
              name: "Administrative staff Stock By Working Facility Type HP.6"
            },
            {
              deuid: "bcIh7bdXz7D",
              cocuid: "IMqululFzhP",
              cell_no: "E69",
              total: false,
              name:
                "Health information systems personnel Stock By HF Ownership Public"
            },
            {
              deuid: "bcIh7bdXz7D",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F69",
              total: false,
              name:
                "Health information systems personnel Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "bcIh7bdXz7D",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G69",
              total: false,
              name:
                "Health information systems personnel Stock By HF Ownership Private for profit"
            },
            {
              deuid: "uj0O9RhtzD8",
              cocuid: "p3raMKTiHsj",
              cell_no: "H69",
              total: false,
              name:
                "Health information systems personnel Stock By Working Facility Type HP.1"
            },
            {
              deuid: "uj0O9RhtzD8",
              cocuid: "DyPeahMx1ww",
              cell_no: "I69",
              total: false,
              name:
                "Health information systems personnel Stock By Working Facility Type HP.2"
            },
            {
              deuid: "uj0O9RhtzD8",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J69",
              total: false,
              name:
                "Health information systems personnel Stock By Working Facility Type HP.3"
            },
            {
              deuid: "uj0O9RhtzD8",
              cocuid: "Vy4zROU78hr",
              cell_no: "K69",
              total: false,
              name:
                "Health information systems personnel Stock By Working Facility Type HP.4"
            },
            {
              deuid: "uj0O9RhtzD8",
              cocuid: "SbearYuCfX5",
              cell_no: "L69",
              total: false,
              name:
                "Health information systems personnel Stock By Working Facility Type HP.5"
            },
            {
              deuid: "uj0O9RhtzD8",
              cocuid: "TCVfWydCsa4",
              cell_no: "M69",
              total: false,
              name:
                "Health information systems personnel Stock By Working Facility Type HP.6"
            },
            {
              deuid: "y2QmWTVJ0F0",
              cocuid: "IMqululFzhP",
              cell_no: "E70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By HF Ownership Public"
            },
            {
              deuid: "y2QmWTVJ0F0",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "y2QmWTVJ0F0",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By HF Ownership Private for profit"
            },
            {
              deuid: "eOwKCkmSUOO",
              cocuid: "p3raMKTiHsj",
              cell_no: "H70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Working Facility Type HP.1"
            },
            {
              deuid: "eOwKCkmSUOO",
              cocuid: "DyPeahMx1ww",
              cell_no: "I70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Working Facility Type HP.2"
            },
            {
              deuid: "eOwKCkmSUOO",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Working Facility Type HP.3"
            },
            {
              deuid: "eOwKCkmSUOO",
              cocuid: "Vy4zROU78hr",
              cell_no: "K70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Working Facility Type HP.4"
            },
            {
              deuid: "eOwKCkmSUOO",
              cocuid: "SbearYuCfX5",
              cell_no: "L70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Working Facility Type HP.5"
            },
            {
              deuid: "eOwKCkmSUOO",
              cocuid: "TCVfWydCsa4",
              cell_no: "M70",
              total: false,
              name:
                "Engineering and maintenance staff Stock By Working Facility Type HP.6"
            },
            {
              deuid: "yj5jWkUtBa9",
              cocuid: "IMqululFzhP",
              cell_no: "E71",
              total: false,
              name:
                "Other non-medical professional staff Stock By HF Ownership Public"
            },
            {
              deuid: "yj5jWkUtBa9",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F71",
              total: false,
              name:
                "Other non-medical professional staff Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "yj5jWkUtBa9",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G71",
              total: false,
              name:
                "Other non-medical professional staff Stock By HF Ownership Private for profit"
            },
            {
              deuid: "jwpUKqza5tE",
              cocuid: "p3raMKTiHsj",
              cell_no: "H71",
              total: false,
              name:
                "Other non-medical professional staff Stock By Working Facility Type HP.1"
            },
            {
              deuid: "jwpUKqza5tE",
              cocuid: "DyPeahMx1ww",
              cell_no: "I71",
              total: false,
              name:
                "Other non-medical professional staff Stock By Working Facility Type HP.2"
            },
            {
              deuid: "jwpUKqza5tE",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J71",
              total: false,
              name:
                "Other non-medical professional staff Stock By Working Facility Type HP.3"
            },
            {
              deuid: "jwpUKqza5tE",
              cocuid: "Vy4zROU78hr",
              cell_no: "K71",
              total: false,
              name:
                "Other non-medical professional staff Stock By Working Facility Type HP.4"
            },
            {
              deuid: "jwpUKqza5tE",
              cocuid: "SbearYuCfX5",
              cell_no: "L71",
              total: false,
              name:
                "Other non-medical professional staff Stock By Working Facility Type HP.5"
            },
            {
              deuid: "jwpUKqza5tE",
              cocuid: "TCVfWydCsa4",
              cell_no: "M71",
              total: false,
              name:
                "Other non-medical professional staff Stock By Working Facility Type HP.6"
            },
            {
              deuid: "I5v0SqhcWvK",
              cocuid: "IMqululFzhP",
              cell_no: "E72",
              total: false,
              name:
                "Other non-medical support staff Stock By HF Ownership Public"
            },
            {
              deuid: "I5v0SqhcWvK",
              cocuid: "N3nYJ6ScaYx",
              cell_no: "F72",
              total: false,
              name:
                "Other non-medical support staff Stock By HF Ownership Private not for profit"
            },
            {
              deuid: "I5v0SqhcWvK",
              cocuid: "UKbfaRlqkpY",
              cell_no: "G72",
              total: false,
              name:
                "Other non-medical support staff Stock By HF Ownership Private for profit"
            },
            {
              deuid: "h13bMS86rtI",
              cocuid: "p3raMKTiHsj",
              cell_no: "H72",
              total: false,
              name:
                "Other non-medical support staff Stock By Working Facility Type HP.1"
            },
            {
              deuid: "h13bMS86rtI",
              cocuid: "DyPeahMx1ww",
              cell_no: "I72",
              total: false,
              name:
                "Other non-medical support staff Stock By Working Facility Type HP.2"
            },
            {
              deuid: "h13bMS86rtI",
              cocuid: "fJBWZdiQ1Vj",
              cell_no: "J72",
              total: false,
              name:
                "Other non-medical support staff Stock By Working Facility Type HP.3"
            },
            {
              deuid: "h13bMS86rtI",
              cocuid: "Vy4zROU78hr",
              cell_no: "K72",
              total: false,
              name:
                "Other non-medical support staff Stock By Working Facility Type HP.4"
            },
            {
              deuid: "h13bMS86rtI",
              cocuid: "SbearYuCfX5",
              cell_no: "L72",
              total: false,
              name:
                "Other non-medical support staff Stock By Working Facility Type HP.5"
            },
            {
              deuid: "h13bMS86rtI",
              cocuid: "TCVfWydCsa4",
              cell_no: "M72",
              total: false,
              name:
                "Other non-medical support staff Stock By Working Facility Type HP.6"
            },
            {
              deuid: "l91qM3cJTek",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D8",
              total: false,
              name: "Working personnel in all sectors default"
            },
            {
              deuid: "sV8cE4AX2yl",
              cocuid: "Xr12mI7VPn3",
              cell_no: "D9",
              total: false,
              name: "Working personnel in the health sector default"
            }
          ]
        },
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 3,
          sheet_name: "Foreign Trained",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "Q2",
          year_cell: "O4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "tu2P5ALJRow",
              cocuid: "i14E8ggjzvt",
              cell_no: "D8",
              total: false,
              name: "Foreign trained Medical doctors Afghanistan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "i14E8ggjzvt",
              cell_no: "E8",
              total: false,
              name: "Foreign trained Nurses Afghanistan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "EhXjWmnNPjO",
              cell_no: "D9",
              total: false,
              name: "Foreign trained Medical doctors Albania"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "EhXjWmnNPjO",
              cell_no: "E9",
              total: false,
              name: "Foreign trained Nurses Albania"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "rJ2dfIqC23R",
              cell_no: "D10",
              total: false,
              name: "Foreign trained Medical doctors Algeria"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "rJ2dfIqC23R",
              cell_no: "E10",
              total: false,
              name: "Foreign trained Nurses Algeria"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "vwj0hgJQQ8O",
              cell_no: "D11",
              total: false,
              name: "Foreign trained Medical doctors Andorra"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "vwj0hgJQQ8O",
              cell_no: "E11",
              total: false,
              name: "Foreign trained Nurses Andorra"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "BkdpZQISAQE",
              cell_no: "D12",
              total: false,
              name: "Foreign trained Medical doctors Angola"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "BkdpZQISAQE",
              cell_no: "E12",
              total: false,
              name: "Foreign trained Nurses Angola"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "VOFBd8mUdSi",
              cell_no: "D13",
              total: false,
              name: "Foreign trained Medical doctors Antigua and Barbuda"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "VOFBd8mUdSi",
              cell_no: "E13",
              total: false,
              name: "Foreign trained Nurses Antigua and Barbuda"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "K3EI0GwfkG8",
              cell_no: "D14",
              total: false,
              name: "Foreign trained Medical doctors Argentina"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "K3EI0GwfkG8",
              cell_no: "E14",
              total: false,
              name: "Foreign trained Nurses Argentina"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "H8DnO52iMD9",
              cell_no: "D15",
              total: false,
              name: "Foreign trained Medical doctors Armenia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "H8DnO52iMD9",
              cell_no: "E15",
              total: false,
              name: "Foreign trained Nurses Armenia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "mVxpfBydPB7",
              cell_no: "D16",
              total: false,
              name: "Foreign trained Medical doctors Australia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "mVxpfBydPB7",
              cell_no: "E16",
              total: false,
              name: "Foreign trained Nurses Australia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "VjdgVLwPWfZ",
              cell_no: "D17",
              total: false,
              name: "Foreign trained Medical doctors Austria"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "VjdgVLwPWfZ",
              cell_no: "E17",
              total: false,
              name: "Foreign trained Nurses Austria"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "yDEKhOz2lvV",
              cell_no: "D18",
              total: false,
              name: "Foreign trained Medical doctors Azerbaijan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "yDEKhOz2lvV",
              cell_no: "E18",
              total: false,
              name: "Foreign trained Nurses Azerbaijan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "YDDLRoVNxAB",
              cell_no: "D19",
              total: false,
              name: "Foreign trained Medical doctors Bahamas"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "YDDLRoVNxAB",
              cell_no: "E19",
              total: false,
              name: "Foreign trained Nurses Bahamas"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "aLiNAjoAsDt",
              cell_no: "D20",
              total: false,
              name: "Foreign trained Medical doctors Bahrain"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "aLiNAjoAsDt",
              cell_no: "E20",
              total: false,
              name: "Foreign trained Nurses Bahrain"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "mQOrGsSPzBX",
              cell_no: "D21",
              total: false,
              name: "Foreign trained Medical doctors Bangladesh"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "mQOrGsSPzBX",
              cell_no: "E21",
              total: false,
              name: "Foreign trained Nurses Bangladesh"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Lpvf0YxPz6h",
              cell_no: "D22",
              total: false,
              name: "Foreign trained Medical doctors Barbados"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Lpvf0YxPz6h",
              cell_no: "E22",
              total: false,
              name: "Foreign trained Nurses Barbados"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "L3f8EEO2QTn",
              cell_no: "D23",
              total: false,
              name: "Foreign trained Medical doctors Belarus"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "L3f8EEO2QTn",
              cell_no: "E23",
              total: false,
              name: "Foreign trained Nurses Belarus"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "iHzbU9M01XV",
              cell_no: "D24",
              total: false,
              name: "Foreign trained Medical doctors Belgium"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "iHzbU9M01XV",
              cell_no: "E24",
              total: false,
              name: "Foreign trained Nurses Belgium"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "YuLaFfZxTwJ",
              cell_no: "D25",
              total: false,
              name: "Foreign trained Medical doctors Belize"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "YuLaFfZxTwJ",
              cell_no: "E25",
              total: false,
              name: "Foreign trained Nurses Belize"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "OyaYCadoBtb",
              cell_no: "D26",
              total: false,
              name: "Foreign trained Medical doctors Benin"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "OyaYCadoBtb",
              cell_no: "E26",
              total: false,
              name: "Foreign trained Nurses Benin"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "pjDDwNroUiK",
              cell_no: "D27",
              total: false,
              name: "Foreign trained Medical doctors Bhutan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "pjDDwNroUiK",
              cell_no: "E27",
              total: false,
              name: "Foreign trained Nurses Bhutan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Exg37zi5bC6",
              cell_no: "D28",
              total: false,
              name:
                "Foreign trained Medical doctors Bolivia (Plurinational State of)"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Exg37zi5bC6",
              cell_no: "E28",
              total: false,
              name: "Foreign trained Nurses Bolivia (Plurinational State of)"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "S8oIZdNn50G",
              cell_no: "D29",
              total: false,
              name: "Foreign trained Medical doctors Bosnia and Herzegovina"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "S8oIZdNn50G",
              cell_no: "E29",
              total: false,
              name: "Foreign trained Nurses Bosnia and Herzegovina"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "HP50SIF4Fby",
              cell_no: "D30",
              total: false,
              name: "Foreign trained Medical doctors Botswana"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "HP50SIF4Fby",
              cell_no: "E30",
              total: false,
              name: "Foreign trained Nurses Botswana"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "JgcDpU82eRk",
              cell_no: "D31",
              total: false,
              name: "Foreign trained Medical doctors Brazil"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "JgcDpU82eRk",
              cell_no: "E31",
              total: false,
              name: "Foreign trained Nurses Brazil"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "V5rMEsxYhaF",
              cell_no: "D32",
              total: false,
              name: "Foreign trained Medical doctors Brunei Darussalam"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "V5rMEsxYhaF",
              cell_no: "E32",
              total: false,
              name: "Foreign trained Nurses Brunei Darussalam"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "aeEH9WsPkWk",
              cell_no: "D33",
              total: false,
              name: "Foreign trained Medical doctors Bulgaria"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "aeEH9WsPkWk",
              cell_no: "E33",
              total: false,
              name: "Foreign trained Nurses Bulgaria"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "HzK449Z1Mop",
              cell_no: "D34",
              total: false,
              name: "Foreign trained Medical doctors Burkina Faso"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "HzK449Z1Mop",
              cell_no: "E34",
              total: false,
              name: "Foreign trained Nurses Burkina Faso"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "B3fcwYE45w6",
              cell_no: "D35",
              total: false,
              name: "Foreign trained Medical doctors Burundi"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "B3fcwYE45w6",
              cell_no: "E35",
              total: false,
              name: "Foreign trained Nurses Burundi"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "zA5RHKBta1T",
              cell_no: "D36",
              total: false,
              name: "Foreign trained Medical doctors Cabo Verde"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "zA5RHKBta1T",
              cell_no: "E36",
              total: false,
              name: "Foreign trained Nurses Cabo Verde"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ix4kFHxwYTd",
              cell_no: "D37",
              total: false,
              name: "Foreign trained Medical doctors Cambodia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ix4kFHxwYTd",
              cell_no: "E37",
              total: false,
              name: "Foreign trained Nurses Cambodia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "zdnpGy5G70E",
              cell_no: "D38",
              total: false,
              name: "Foreign trained Medical doctors Cameroon"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "zdnpGy5G70E",
              cell_no: "E38",
              total: false,
              name: "Foreign trained Nurses Cameroon"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ZyDNe6r8Rcu",
              cell_no: "D39",
              total: false,
              name: "Foreign trained Medical doctors Canada"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ZyDNe6r8Rcu",
              cell_no: "E39",
              total: false,
              name: "Foreign trained Nurses Canada"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "HdwPlhpIWce",
              cell_no: "D40",
              total: false,
              name: "Foreign trained Medical doctors Central African Republic"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "HdwPlhpIWce",
              cell_no: "E40",
              total: false,
              name: "Foreign trained Nurses Central African Republic"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "IttDSHJE3tY",
              cell_no: "D41",
              total: false,
              name: "Foreign trained Medical doctors Chad"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "IttDSHJE3tY",
              cell_no: "E41",
              total: false,
              name: "Foreign trained Nurses Chad"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "RRV32wU5Sk1",
              cell_no: "D42",
              total: false,
              name: "Foreign trained Medical doctors Chile"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "RRV32wU5Sk1",
              cell_no: "E42",
              total: false,
              name: "Foreign trained Nurses Chile"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Nq0rzj9aWEV",
              cell_no: "D43",
              total: false,
              name: "Foreign trained Medical doctors China"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Nq0rzj9aWEV",
              cell_no: "E43",
              total: false,
              name: "Foreign trained Nurses China"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "QdpBLugMtqQ",
              cell_no: "D44",
              total: false,
              name: "Foreign trained Medical doctors Colombia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "QdpBLugMtqQ",
              cell_no: "E44",
              total: false,
              name: "Foreign trained Nurses Colombia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "POUZYADWUp1",
              cell_no: "D45",
              total: false,
              name: "Foreign trained Medical doctors Comoros"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "POUZYADWUp1",
              cell_no: "E45",
              total: false,
              name: "Foreign trained Nurses Comoros"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "LBtaidI5G2z",
              cell_no: "D46",
              total: false,
              name: "Foreign trained Medical doctors Congo"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "LBtaidI5G2z",
              cell_no: "E46",
              total: false,
              name: "Foreign trained Nurses Congo"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Y1v6mwcswYO",
              cell_no: "D47",
              total: false,
              name: "Foreign trained Medical doctors Cook Islands"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Y1v6mwcswYO",
              cell_no: "E47",
              total: false,
              name: "Foreign trained Nurses Cook Islands"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "cxRqR2lVtM7",
              cell_no: "D48",
              total: false,
              name: "Foreign trained Medical doctors Costa Rica"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "cxRqR2lVtM7",
              cell_no: "E48",
              total: false,
              name: "Foreign trained Nurses Costa Rica"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "JMWzvzwgToC",
              cell_no: "D49",
              total: false,
              name: "Foreign trained Medical doctors Croatia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "JMWzvzwgToC",
              cell_no: "E49",
              total: false,
              name: "Foreign trained Nurses Croatia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "k8RfzK41pD4",
              cell_no: "D50",
              total: false,
              name: "Foreign trained Medical doctors C\ufffdte d'Ivoire"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "k8RfzK41pD4",
              cell_no: "E50",
              total: false,
              name: "Foreign trained Nurses C\ufffdte d'Ivoire"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "zexkIIZrZ3B",
              cell_no: "D51",
              total: false,
              name: "Foreign trained Medical doctors Cuba"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "zexkIIZrZ3B",
              cell_no: "E51",
              total: false,
              name: "Foreign trained Nurses Cuba"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "RdP4lkM83cM",
              cell_no: "D52",
              total: false,
              name: "Foreign trained Medical doctors Cyprus"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "RdP4lkM83cM",
              cell_no: "E52",
              total: false,
              name: "Foreign trained Nurses Cyprus"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "F59E3s3oEOr",
              cell_no: "D53",
              total: false,
              name: "Foreign trained Medical doctors Czech Republic"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "F59E3s3oEOr",
              cell_no: "E53",
              total: false,
              name: "Foreign trained Nurses Czech Republic"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "wlPajJhqkui",
              cell_no: "D54",
              total: false,
              name:
                "Foreign trained Medical doctors Democratic People's Republic of Korea"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "wlPajJhqkui",
              cell_no: "E54",
              total: false,
              name:
                "Foreign trained Nurses Democratic People's Republic of Korea"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "GkT2M3jxh7F",
              cell_no: "D55",
              total: false,
              name:
                "Foreign trained Medical doctors Democratic Republic of the Congo"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "GkT2M3jxh7F",
              cell_no: "E55",
              total: false,
              name: "Foreign trained Nurses Democratic Republic of the Congo"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "sj4i9BflXvh",
              cell_no: "D56",
              total: false,
              name: "Foreign trained Medical doctors Denmark"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "sj4i9BflXvh",
              cell_no: "E56",
              total: false,
              name: "Foreign trained Nurses Denmark"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "MSX2ncxe0gF",
              cell_no: "D57",
              total: false,
              name: "Foreign trained Medical doctors Djibouti"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "MSX2ncxe0gF",
              cell_no: "E57",
              total: false,
              name: "Foreign trained Nurses Djibouti"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "w5pFdpuCUW7",
              cell_no: "D58",
              total: false,
              name: "Foreign trained Medical doctors Dominica"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "w5pFdpuCUW7",
              cell_no: "E58",
              total: false,
              name: "Foreign trained Nurses Dominica"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "B8UngZ8uwD2",
              cell_no: "D59",
              total: false,
              name: "Foreign trained Medical doctors Dominican Republic"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "B8UngZ8uwD2",
              cell_no: "E59",
              total: false,
              name: "Foreign trained Nurses Dominican Republic"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "rJSdwEyXgfh",
              cell_no: "D60",
              total: false,
              name: "Foreign trained Medical doctors Ecuador"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "rJSdwEyXgfh",
              cell_no: "E60",
              total: false,
              name: "Foreign trained Nurses Ecuador"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Uubd1dIoT4W",
              cell_no: "D61",
              total: false,
              name: "Foreign trained Medical doctors Egypt"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Uubd1dIoT4W",
              cell_no: "E61",
              total: false,
              name: "Foreign trained Nurses Egypt"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "xl2h6v1N72r",
              cell_no: "D62",
              total: false,
              name: "Foreign trained Medical doctors El Salvador"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "xl2h6v1N72r",
              cell_no: "E62",
              total: false,
              name: "Foreign trained Nurses El Salvador"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "zOt4KjY6v7C",
              cell_no: "D63",
              total: false,
              name: "Foreign trained Medical doctors Equatorial Guinea"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "zOt4KjY6v7C",
              cell_no: "E63",
              total: false,
              name: "Foreign trained Nurses Equatorial Guinea"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "XbTx2aGNiKd",
              cell_no: "D64",
              total: false,
              name: "Foreign trained Medical doctors Eritrea"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "XbTx2aGNiKd",
              cell_no: "E64",
              total: false,
              name: "Foreign trained Nurses Eritrea"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "CduVOiDWxlt",
              cell_no: "D65",
              total: false,
              name: "Foreign trained Medical doctors Estonia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "CduVOiDWxlt",
              cell_no: "E65",
              total: false,
              name: "Foreign trained Nurses Estonia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "z5MSkYMyUDA",
              cell_no: "D66",
              total: false,
              name: "Foreign trained Medical doctors Ethiopia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "z5MSkYMyUDA",
              cell_no: "E66",
              total: false,
              name: "Foreign trained Nurses Ethiopia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "n1ptipI0iZU",
              cell_no: "D67",
              total: false,
              name: "Foreign trained Medical doctors Fiji"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "n1ptipI0iZU",
              cell_no: "E67",
              total: false,
              name: "Foreign trained Nurses Fiji"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "H9TZE490EpE",
              cell_no: "D68",
              total: false,
              name: "Foreign trained Medical doctors Finland"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "H9TZE490EpE",
              cell_no: "E68",
              total: false,
              name: "Foreign trained Nurses Finland"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "pqnXfUagaiY",
              cell_no: "D69",
              total: false,
              name: "Foreign trained Medical doctors France"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "pqnXfUagaiY",
              cell_no: "E69",
              total: false,
              name: "Foreign trained Nurses France"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "LRoVMRyVmrE",
              cell_no: "D70",
              total: false,
              name: "Foreign trained Medical doctors Gabon"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "LRoVMRyVmrE",
              cell_no: "E70",
              total: false,
              name: "Foreign trained Nurses Gabon"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Z0aVan7vD82",
              cell_no: "D71",
              total: false,
              name: "Foreign trained Medical doctors Gambia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Z0aVan7vD82",
              cell_no: "E71",
              total: false,
              name: "Foreign trained Nurses Gambia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "hPJQaP7PdYq",
              cell_no: "D72",
              total: false,
              name: "Foreign trained Medical doctors Georgia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "hPJQaP7PdYq",
              cell_no: "E72",
              total: false,
              name: "Foreign trained Nurses Georgia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "UTDBwK73RlG",
              cell_no: "D73",
              total: false,
              name: "Foreign trained Medical doctors Germany"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "UTDBwK73RlG",
              cell_no: "E73",
              total: false,
              name: "Foreign trained Nurses Germany"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "BE32i8A9IOr",
              cell_no: "D74",
              total: false,
              name: "Foreign trained Medical doctors Ghana"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "BE32i8A9IOr",
              cell_no: "E74",
              total: false,
              name: "Foreign trained Nurses Ghana"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "dplV0gzW0ea",
              cell_no: "D75",
              total: false,
              name: "Foreign trained Medical doctors Greece"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "dplV0gzW0ea",
              cell_no: "E75",
              total: false,
              name: "Foreign trained Nurses Greece"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "NojSG8rZDfq",
              cell_no: "D76",
              total: false,
              name: "Foreign trained Medical doctors Grenada"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "NojSG8rZDfq",
              cell_no: "E76",
              total: false,
              name: "Foreign trained Nurses Grenada"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "hjdFz4fLLzw",
              cell_no: "D77",
              total: false,
              name: "Foreign trained Medical doctors Guatemala"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "hjdFz4fLLzw",
              cell_no: "E77",
              total: false,
              name: "Foreign trained Nurses Guatemala"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "GKkncWAOs8H",
              cell_no: "D78",
              total: false,
              name: "Foreign trained Medical doctors Guinea"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "GKkncWAOs8H",
              cell_no: "E78",
              total: false,
              name: "Foreign trained Nurses Guinea"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "EPjTph0oE8r",
              cell_no: "D79",
              total: false,
              name: "Foreign trained Medical doctors Guinea-Bissau"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "EPjTph0oE8r",
              cell_no: "E79",
              total: false,
              name: "Foreign trained Nurses Guinea-Bissau"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Zgk5mud8930",
              cell_no: "D80",
              total: false,
              name: "Foreign trained Medical doctors Guyana"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Zgk5mud8930",
              cell_no: "E80",
              total: false,
              name: "Foreign trained Nurses Guyana"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "SlA9m2ZX9XS",
              cell_no: "D81",
              total: false,
              name: "Foreign trained Medical doctors Haiti"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "SlA9m2ZX9XS",
              cell_no: "E81",
              total: false,
              name: "Foreign trained Nurses Haiti"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "hIrci8ms28E",
              cell_no: "D82",
              total: false,
              name: "Foreign trained Medical doctors Honduras"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "hIrci8ms28E",
              cell_no: "E82",
              total: false,
              name: "Foreign trained Nurses Honduras"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "BKNhBq1RiwZ",
              cell_no: "D83",
              total: false,
              name: "Foreign trained Medical doctors Hungary"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "BKNhBq1RiwZ",
              cell_no: "E83",
              total: false,
              name: "Foreign trained Nurses Hungary"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "uNJCzPnnWNW",
              cell_no: "D84",
              total: false,
              name: "Foreign trained Medical doctors Iceland"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "uNJCzPnnWNW",
              cell_no: "E84",
              total: false,
              name: "Foreign trained Nurses Iceland"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "HvDcrobmiCy",
              cell_no: "D85",
              total: false,
              name: "Foreign trained Medical doctors India"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "HvDcrobmiCy",
              cell_no: "E85",
              total: false,
              name: "Foreign trained Nurses India"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "qdxpgnOUeam",
              cell_no: "D86",
              total: false,
              name: "Foreign trained Medical doctors Indonesia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "qdxpgnOUeam",
              cell_no: "E86",
              total: false,
              name: "Foreign trained Nurses Indonesia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "KvI6UnlCWE8",
              cell_no: "D87",
              total: false,
              name: "Foreign trained Medical doctors Iran (Islamic Republic of)"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "KvI6UnlCWE8",
              cell_no: "E87",
              total: false,
              name: "Foreign trained Nurses Iran (Islamic Republic of)"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "XW4cMFJ3IPd",
              cell_no: "D88",
              total: false,
              name: "Foreign trained Medical doctors Iraq"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "XW4cMFJ3IPd",
              cell_no: "E88",
              total: false,
              name: "Foreign trained Nurses Iraq"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "enrjtKkx6PG",
              cell_no: "D89",
              total: false,
              name: "Foreign trained Medical doctors Ireland"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "enrjtKkx6PG",
              cell_no: "E89",
              total: false,
              name: "Foreign trained Nurses Ireland"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "JrSwky5tYzt",
              cell_no: "D90",
              total: false,
              name: "Foreign trained Medical doctors Israel"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "JrSwky5tYzt",
              cell_no: "E90",
              total: false,
              name: "Foreign trained Nurses Israel"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "A8ZYkf5BTQ1",
              cell_no: "D91",
              total: false,
              name: "Foreign trained Medical doctors Italy"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "A8ZYkf5BTQ1",
              cell_no: "E91",
              total: false,
              name: "Foreign trained Nurses Italy"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "IArireTHAtu",
              cell_no: "D92",
              total: false,
              name: "Foreign trained Medical doctors Jamaica"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "IArireTHAtu",
              cell_no: "E92",
              total: false,
              name: "Foreign trained Nurses Jamaica"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "poDz4wDp6J0",
              cell_no: "D93",
              total: false,
              name: "Foreign trained Medical doctors Japan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "poDz4wDp6J0",
              cell_no: "E93",
              total: false,
              name: "Foreign trained Nurses Japan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "z8JPjc7MYwc",
              cell_no: "D94",
              total: false,
              name: "Foreign trained Medical doctors Jordan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "z8JPjc7MYwc",
              cell_no: "E94",
              total: false,
              name: "Foreign trained Nurses Jordan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "fAb4itKc1ZM",
              cell_no: "D95",
              total: false,
              name: "Foreign trained Medical doctors Kazakhstan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "fAb4itKc1ZM",
              cell_no: "E95",
              total: false,
              name: "Foreign trained Nurses Kazakhstan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "nHiJwDVwoBi",
              cell_no: "D96",
              total: false,
              name: "Foreign trained Medical doctors Kenya"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "nHiJwDVwoBi",
              cell_no: "E96",
              total: false,
              name: "Foreign trained Nurses Kenya"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "DSefi5x6sWB",
              cell_no: "D97",
              total: false,
              name: "Foreign trained Medical doctors Kiribati"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "DSefi5x6sWB",
              cell_no: "E97",
              total: false,
              name: "Foreign trained Nurses Kiribati"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "QUXnEwBKOCt",
              cell_no: "D98",
              total: false,
              name: "Foreign trained Medical doctors Kuwait"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "QUXnEwBKOCt",
              cell_no: "E98",
              total: false,
              name: "Foreign trained Nurses Kuwait"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "XxT1SCRuVDD",
              cell_no: "D99",
              total: false,
              name: "Foreign trained Medical doctors Kyrgyzstan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "XxT1SCRuVDD",
              cell_no: "E99",
              total: false,
              name: "Foreign trained Nurses Kyrgyzstan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "EugP2KVsM7Q",
              cell_no: "D100",
              total: false,
              name:
                "Foreign trained Medical doctors Lao People's Democratic Republic"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "EugP2KVsM7Q",
              cell_no: "E100",
              total: false,
              name: "Foreign trained Nurses Lao People's Democratic Republic"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "QUUTx1RNwpi",
              cell_no: "D101",
              total: false,
              name: "Foreign trained Medical doctors Latvia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "QUUTx1RNwpi",
              cell_no: "E101",
              total: false,
              name: "Foreign trained Nurses Latvia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "CqGT5VjDx2p",
              cell_no: "D102",
              total: false,
              name: "Foreign trained Medical doctors Lebanon"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "CqGT5VjDx2p",
              cell_no: "E102",
              total: false,
              name: "Foreign trained Nurses Lebanon"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "aoq4jeGV5NM",
              cell_no: "D103",
              total: false,
              name: "Foreign trained Medical doctors Lesotho"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "aoq4jeGV5NM",
              cell_no: "E103",
              total: false,
              name: "Foreign trained Nurses Lesotho"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "JPBLCDK3H2x",
              cell_no: "D104",
              total: false,
              name: "Foreign trained Medical doctors Liberia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "JPBLCDK3H2x",
              cell_no: "E104",
              total: false,
              name: "Foreign trained Nurses Liberia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "efCfb5edDjv",
              cell_no: "D105",
              total: false,
              name: "Foreign trained Medical doctors Libya"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "efCfb5edDjv",
              cell_no: "E105",
              total: false,
              name: "Foreign trained Nurses Libya"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "DOa51SvSShy",
              cell_no: "D106",
              total: false,
              name: "Foreign trained Medical doctors Lithuania"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "DOa51SvSShy",
              cell_no: "E106",
              total: false,
              name: "Foreign trained Nurses Lithuania"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "LE4fsk3RYza",
              cell_no: "D107",
              total: false,
              name: "Foreign trained Medical doctors Luxembourg"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "LE4fsk3RYza",
              cell_no: "E107",
              total: false,
              name: "Foreign trained Nurses Luxembourg"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "zg6B0qb5NY3",
              cell_no: "D108",
              total: false,
              name: "Foreign trained Medical doctors Madagascar"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "zg6B0qb5NY3",
              cell_no: "E108",
              total: false,
              name: "Foreign trained Nurses Madagascar"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ZO5braqROk6",
              cell_no: "D109",
              total: false,
              name: "Foreign trained Medical doctors Malawi"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ZO5braqROk6",
              cell_no: "E109",
              total: false,
              name: "Foreign trained Nurses Malawi"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Mv3kaUwZXRq",
              cell_no: "D110",
              total: false,
              name: "Foreign trained Medical doctors Malaysia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Mv3kaUwZXRq",
              cell_no: "E110",
              total: false,
              name: "Foreign trained Nurses Malaysia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Ak4QGxirDXg",
              cell_no: "D111",
              total: false,
              name: "Foreign trained Medical doctors Maldives"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Ak4QGxirDXg",
              cell_no: "E111",
              total: false,
              name: "Foreign trained Nurses Maldives"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "dAREsnanSp5",
              cell_no: "D112",
              total: false,
              name: "Foreign trained Medical doctors Mali"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "dAREsnanSp5",
              cell_no: "E112",
              total: false,
              name: "Foreign trained Nurses Mali"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "GVeTUYRwWNF",
              cell_no: "D113",
              total: false,
              name: "Foreign trained Medical doctors Malta"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "GVeTUYRwWNF",
              cell_no: "E113",
              total: false,
              name: "Foreign trained Nurses Malta"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "gvFoQrCkLc2",
              cell_no: "D114",
              total: false,
              name: "Foreign trained Medical doctors Marshall Islands"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "gvFoQrCkLc2",
              cell_no: "E114",
              total: false,
              name: "Foreign trained Nurses Marshall Islands"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "uNIgpV4l21k",
              cell_no: "D115",
              total: false,
              name: "Foreign trained Medical doctors Mauritania"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "uNIgpV4l21k",
              cell_no: "E115",
              total: false,
              name: "Foreign trained Nurses Mauritania"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "LkiHwqqYnxV",
              cell_no: "D116",
              total: false,
              name: "Foreign trained Medical doctors Mauritius"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "LkiHwqqYnxV",
              cell_no: "E116",
              total: false,
              name: "Foreign trained Nurses Mauritius"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "kYO6lFqgkUO",
              cell_no: "D117",
              total: false,
              name: "Foreign trained Medical doctors Mexico"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "kYO6lFqgkUO",
              cell_no: "E117",
              total: false,
              name: "Foreign trained Nurses Mexico"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "LddbYuuaWf7",
              cell_no: "D118",
              total: false,
              name:
                "Foreign trained Medical doctors Micronesia (Federated States of)"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "LddbYuuaWf7",
              cell_no: "E118",
              total: false,
              name: "Foreign trained Nurses Micronesia (Federated States of)"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "GC5rlUksCqm",
              cell_no: "D119",
              total: false,
              name: "Foreign trained Medical doctors Monaco"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "GC5rlUksCqm",
              cell_no: "E119",
              total: false,
              name: "Foreign trained Nurses Monaco"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "feoDuRjZweV",
              cell_no: "D120",
              total: false,
              name: "Foreign trained Medical doctors Mongolia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "feoDuRjZweV",
              cell_no: "E120",
              total: false,
              name: "Foreign trained Nurses Mongolia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "blA5KNE6nZO",
              cell_no: "D121",
              total: false,
              name: "Foreign trained Medical doctors Montenegro"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "blA5KNE6nZO",
              cell_no: "E121",
              total: false,
              name: "Foreign trained Nurses Montenegro"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "qfXgWkacWGi",
              cell_no: "D122",
              total: false,
              name: "Foreign trained Medical doctors Morocco"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "qfXgWkacWGi",
              cell_no: "E122",
              total: false,
              name: "Foreign trained Nurses Morocco"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "pbip5m1yf5Y",
              cell_no: "D123",
              total: false,
              name: "Foreign trained Medical doctors Mozambique"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "pbip5m1yf5Y",
              cell_no: "E123",
              total: false,
              name: "Foreign trained Nurses Mozambique"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "RsBAd46LBnm",
              cell_no: "D124",
              total: false,
              name: "Foreign trained Medical doctors Myanmar"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "RsBAd46LBnm",
              cell_no: "E124",
              total: false,
              name: "Foreign trained Nurses Myanmar"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "sHcFoPbjSrP",
              cell_no: "D125",
              total: false,
              name: "Foreign trained Medical doctors Namibia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "sHcFoPbjSrP",
              cell_no: "E125",
              total: false,
              name: "Foreign trained Nurses Namibia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "xsXII0TZ5TD",
              cell_no: "D126",
              total: false,
              name: "Foreign trained Medical doctors Nauru"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "xsXII0TZ5TD",
              cell_no: "E126",
              total: false,
              name: "Foreign trained Nurses Nauru"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "QhZPfMYBla6",
              cell_no: "D127",
              total: false,
              name: "Foreign trained Medical doctors Nepal"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "QhZPfMYBla6",
              cell_no: "E127",
              total: false,
              name: "Foreign trained Nurses Nepal"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "SZ3nIBbJDHd",
              cell_no: "D128",
              total: false,
              name: "Foreign trained Medical doctors Netherlands"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "SZ3nIBbJDHd",
              cell_no: "E128",
              total: false,
              name: "Foreign trained Nurses Netherlands"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "IGq57K2U3et",
              cell_no: "D129",
              total: false,
              name: "Foreign trained Medical doctors New Zealand"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "IGq57K2U3et",
              cell_no: "E129",
              total: false,
              name: "Foreign trained Nurses New Zealand"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "qV0jUJzFUER",
              cell_no: "D130",
              total: false,
              name: "Foreign trained Medical doctors Nicaragua"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "qV0jUJzFUER",
              cell_no: "E130",
              total: false,
              name: "Foreign trained Nurses Nicaragua"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Wl6fGTpQ2aN",
              cell_no: "D131",
              total: false,
              name: "Foreign trained Medical doctors Niger"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Wl6fGTpQ2aN",
              cell_no: "E131",
              total: false,
              name: "Foreign trained Nurses Niger"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "EDPtZbCSShb",
              cell_no: "D132",
              total: false,
              name: "Foreign trained Medical doctors Nigeria"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "EDPtZbCSShb",
              cell_no: "E132",
              total: false,
              name: "Foreign trained Nurses Nigeria"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Jx6oc5hMVvO",
              cell_no: "D133",
              total: false,
              name: "Foreign trained Medical doctors Niue"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Jx6oc5hMVvO",
              cell_no: "E133",
              total: false,
              name: "Foreign trained Nurses Niue"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "a2xwzp8oVHw",
              cell_no: "D134",
              total: false,
              name: "Foreign trained Medical doctors Norway"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "a2xwzp8oVHw",
              cell_no: "E134",
              total: false,
              name: "Foreign trained Nurses Norway"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "gsbHTvgB2ve",
              cell_no: "D135",
              total: false,
              name: "Foreign trained Medical doctors Oman"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "gsbHTvgB2ve",
              cell_no: "E135",
              total: false,
              name: "Foreign trained Nurses Oman"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "jhV8D0Dvbvz",
              cell_no: "D136",
              total: false,
              name: "Foreign trained Medical doctors Pakistan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "jhV8D0Dvbvz",
              cell_no: "E136",
              total: false,
              name: "Foreign trained Nurses Pakistan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "RJERO5G7Od7",
              cell_no: "D137",
              total: false,
              name: "Foreign trained Medical doctors Palau"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "RJERO5G7Od7",
              cell_no: "E137",
              total: false,
              name: "Foreign trained Nurses Palau"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "JRUk55kvbrE",
              cell_no: "D138",
              total: false,
              name: "Foreign trained Medical doctors Panama"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "JRUk55kvbrE",
              cell_no: "E138",
              total: false,
              name: "Foreign trained Nurses Panama"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "AGWxyqGhgfk",
              cell_no: "D139",
              total: false,
              name: "Foreign trained Medical doctors Papua New Guinea"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "AGWxyqGhgfk",
              cell_no: "E139",
              total: false,
              name: "Foreign trained Nurses Papua New Guinea"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "b6rUObqK3w6",
              cell_no: "D140",
              total: false,
              name: "Foreign trained Medical doctors Paraguay"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "b6rUObqK3w6",
              cell_no: "E140",
              total: false,
              name: "Foreign trained Nurses Paraguay"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Y8Hqecy92p5",
              cell_no: "D141",
              total: false,
              name: "Foreign trained Medical doctors Peru"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Y8Hqecy92p5",
              cell_no: "E141",
              total: false,
              name: "Foreign trained Nurses Peru"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "dyBI6HTR04N",
              cell_no: "D142",
              total: false,
              name: "Foreign trained Medical doctors Philippines"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "dyBI6HTR04N",
              cell_no: "E142",
              total: false,
              name: "Foreign trained Nurses Philippines"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Vlqc8aT5PAo",
              cell_no: "D143",
              total: false,
              name: "Foreign trained Medical doctors Poland"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Vlqc8aT5PAo",
              cell_no: "E143",
              total: false,
              name: "Foreign trained Nurses Poland"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "gxepwyvRxbV",
              cell_no: "D144",
              total: false,
              name: "Foreign trained Medical doctors Portugal"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "gxepwyvRxbV",
              cell_no: "E144",
              total: false,
              name: "Foreign trained Nurses Portugal"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ZmHQN5npDGX",
              cell_no: "D145",
              total: false,
              name: "Foreign trained Medical doctors Qatar"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ZmHQN5npDGX",
              cell_no: "E145",
              total: false,
              name: "Foreign trained Nurses Qatar"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "fPDuFoFWUr3",
              cell_no: "D146",
              total: false,
              name: "Foreign trained Medical doctors Republic of Korea"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "fPDuFoFWUr3",
              cell_no: "E146",
              total: false,
              name: "Foreign trained Nurses Republic of Korea"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Ua4F7QDEr8y",
              cell_no: "D147",
              total: false,
              name: "Foreign trained Medical doctors Republic of Moldova"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Ua4F7QDEr8y",
              cell_no: "E147",
              total: false,
              name: "Foreign trained Nurses Republic of Moldova"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "x01fgjhSf20",
              cell_no: "D148",
              total: false,
              name: "Foreign trained Medical doctors Romania"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "x01fgjhSf20",
              cell_no: "E148",
              total: false,
              name: "Foreign trained Nurses Romania"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "HankECMMB6D",
              cell_no: "D149",
              total: false,
              name: "Foreign trained Medical doctors Russian Federation"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "HankECMMB6D",
              cell_no: "E149",
              total: false,
              name: "Foreign trained Nurses Russian Federation"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ZqdYTyLLuyL",
              cell_no: "D150",
              total: false,
              name: "Foreign trained Medical doctors Rwanda"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ZqdYTyLLuyL",
              cell_no: "E150",
              total: false,
              name: "Foreign trained Nurses Rwanda"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "A7vlGlMOCQi",
              cell_no: "D151",
              total: false,
              name: "Foreign trained Medical doctors Saint Kitts and Nevis"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "A7vlGlMOCQi",
              cell_no: "E151",
              total: false,
              name: "Foreign trained Nurses Saint Kitts and Nevis"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Kr3g14QtHqR",
              cell_no: "D152",
              total: false,
              name: "Foreign trained Medical doctors Saint Lucia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Kr3g14QtHqR",
              cell_no: "E152",
              total: false,
              name: "Foreign trained Nurses Saint Lucia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Agh3IhNPIxF",
              cell_no: "D153",
              total: false,
              name:
                "Foreign trained Medical doctors Saint Vincent and the Grenadines"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Agh3IhNPIxF",
              cell_no: "E153",
              total: false,
              name: "Foreign trained Nurses Saint Vincent and the Grenadines"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "X2GCXVmZeEF",
              cell_no: "D154",
              total: false,
              name: "Foreign trained Medical doctors Samoa"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "X2GCXVmZeEF",
              cell_no: "E154",
              total: false,
              name: "Foreign trained Nurses Samoa"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "q4n8NzDkE7D",
              cell_no: "D155",
              total: false,
              name: "Foreign trained Medical doctors San Marino"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "q4n8NzDkE7D",
              cell_no: "E155",
              total: false,
              name: "Foreign trained Nurses San Marino"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "rdiq6QPpJC7",
              cell_no: "D156",
              total: false,
              name: "Foreign trained Medical doctors Sao Tome and Principe"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "rdiq6QPpJC7",
              cell_no: "E156",
              total: false,
              name: "Foreign trained Nurses Sao Tome and Principe"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "npSh7oFwczs",
              cell_no: "D157",
              total: false,
              name: "Foreign trained Medical doctors Saudi Arabia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "npSh7oFwczs",
              cell_no: "E157",
              total: false,
              name: "Foreign trained Nurses Saudi Arabia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "hsNootK2YBV",
              cell_no: "D158",
              total: false,
              name: "Foreign trained Medical doctors Senegal"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "hsNootK2YBV",
              cell_no: "E158",
              total: false,
              name: "Foreign trained Nurses Senegal"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "WtrglwVLwRf",
              cell_no: "D159",
              total: false,
              name: "Foreign trained Medical doctors Serbia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "WtrglwVLwRf",
              cell_no: "E159",
              total: false,
              name: "Foreign trained Nurses Serbia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ANELZaDsI6L",
              cell_no: "D160",
              total: false,
              name: "Foreign trained Medical doctors Seychelles"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ANELZaDsI6L",
              cell_no: "E160",
              total: false,
              name: "Foreign trained Nurses Seychelles"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "GZTChYSePoP",
              cell_no: "D161",
              total: false,
              name: "Foreign trained Medical doctors Sierra Leone"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "GZTChYSePoP",
              cell_no: "E161",
              total: false,
              name: "Foreign trained Nurses Sierra Leone"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "GSwM6L4ZPsB",
              cell_no: "D162",
              total: false,
              name: "Foreign trained Medical doctors Singapore"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "GSwM6L4ZPsB",
              cell_no: "E162",
              total: false,
              name: "Foreign trained Nurses Singapore"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "dkORIS1sEMv",
              cell_no: "D163",
              total: false,
              name: "Foreign trained Medical doctors Slovakia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "dkORIS1sEMv",
              cell_no: "E163",
              total: false,
              name: "Foreign trained Nurses Slovakia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "St1b2AfFxLb",
              cell_no: "D164",
              total: false,
              name: "Foreign trained Medical doctors Slovenia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "St1b2AfFxLb",
              cell_no: "E164",
              total: false,
              name: "Foreign trained Nurses Slovenia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "J1xdPkLQqgn",
              cell_no: "D165",
              total: false,
              name: "Foreign trained Medical doctors Solomon Islands"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "J1xdPkLQqgn",
              cell_no: "E165",
              total: false,
              name: "Foreign trained Nurses Solomon Islands"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "f2XAafiQede",
              cell_no: "D166",
              total: false,
              name: "Foreign trained Medical doctors Somalia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "f2XAafiQede",
              cell_no: "E166",
              total: false,
              name: "Foreign trained Nurses Somalia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "tsd2otYofQa",
              cell_no: "D167",
              total: false,
              name: "Foreign trained Medical doctors South Africa"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "tsd2otYofQa",
              cell_no: "E167",
              total: false,
              name: "Foreign trained Nurses South Africa"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ESi2uY4Gqn1",
              cell_no: "D168",
              total: false,
              name: "Foreign trained Medical doctors South Sudan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ESi2uY4Gqn1",
              cell_no: "E168",
              total: false,
              name: "Foreign trained Nurses South Sudan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "lh9mjPVQgUs",
              cell_no: "D169",
              total: false,
              name: "Foreign trained Medical doctors Spain"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "lh9mjPVQgUs",
              cell_no: "E169",
              total: false,
              name: "Foreign trained Nurses Spain"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ysEbNJwwJUO",
              cell_no: "D170",
              total: false,
              name: "Foreign trained Medical doctors Sri Lanka"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ysEbNJwwJUO",
              cell_no: "E170",
              total: false,
              name: "Foreign trained Nurses Sri Lanka"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "slhvGcmFwtM",
              cell_no: "D171",
              total: false,
              name: "Foreign trained Medical doctors Sudan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "slhvGcmFwtM",
              cell_no: "E171",
              total: false,
              name: "Foreign trained Nurses Sudan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ibxHVF1IOea",
              cell_no: "D172",
              total: false,
              name: "Foreign trained Medical doctors Suriname"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ibxHVF1IOea",
              cell_no: "E172",
              total: false,
              name: "Foreign trained Nurses Suriname"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "cEeWRyOhOqP",
              cell_no: "D173",
              total: false,
              name: "Foreign trained Medical doctors Swaziland"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "cEeWRyOhOqP",
              cell_no: "E173",
              total: false,
              name: "Foreign trained Nurses Swaziland"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "rgozN0dmixB",
              cell_no: "D174",
              total: false,
              name: "Foreign trained Medical doctors Sweden"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "rgozN0dmixB",
              cell_no: "E174",
              total: false,
              name: "Foreign trained Nurses Sweden"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "Kh9ikyodKnN",
              cell_no: "D175",
              total: false,
              name: "Foreign trained Medical doctors Switzerland"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "Kh9ikyodKnN",
              cell_no: "E175",
              total: false,
              name: "Foreign trained Nurses Switzerland"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "KioZypAqUxc",
              cell_no: "D176",
              total: false,
              name: "Foreign trained Medical doctors Syrian Arab Republic"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "KioZypAqUxc",
              cell_no: "E176",
              total: false,
              name: "Foreign trained Nurses Syrian Arab Republic"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ES9xDNLOKtZ",
              cell_no: "D177",
              total: false,
              name: "Foreign trained Medical doctors Tajikistan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ES9xDNLOKtZ",
              cell_no: "E177",
              total: false,
              name: "Foreign trained Nurses Tajikistan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "jfXGOQwsmKq",
              cell_no: "D178",
              total: false,
              name: "Foreign trained Medical doctors Thailand"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "jfXGOQwsmKq",
              cell_no: "E178",
              total: false,
              name: "Foreign trained Nurses Thailand"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "MFwYpsgHToP",
              cell_no: "D179",
              total: false,
              name:
                "Foreign trained Medical doctors The former Yugoslav republic of Macedonia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "MFwYpsgHToP",
              cell_no: "E179",
              total: false,
              name:
                "Foreign trained Nurses The former Yugoslav republic of Macedonia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "oDBd4Mj0Oc2",
              cell_no: "D180",
              total: false,
              name: "Foreign trained Medical doctors Timor-Leste"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "oDBd4Mj0Oc2",
              cell_no: "E180",
              total: false,
              name: "Foreign trained Nurses Timor-Leste"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "LPbH3n77lxu",
              cell_no: "D181",
              total: false,
              name: "Foreign trained Medical doctors Togo"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "LPbH3n77lxu",
              cell_no: "E181",
              total: false,
              name: "Foreign trained Nurses Togo"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "rIchxlzx0E0",
              cell_no: "D182",
              total: false,
              name: "Foreign trained Medical doctors Tonga"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "rIchxlzx0E0",
              cell_no: "E182",
              total: false,
              name: "Foreign trained Nurses Tonga"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "ROyKFEvDgAp",
              cell_no: "D183",
              total: false,
              name: "Foreign trained Medical doctors Trinidad and Tobago"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "ROyKFEvDgAp",
              cell_no: "E183",
              total: false,
              name: "Foreign trained Nurses Trinidad and Tobago"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "c9WexKHjrHc",
              cell_no: "D184",
              total: false,
              name: "Foreign trained Medical doctors Tunisia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "c9WexKHjrHc",
              cell_no: "E184",
              total: false,
              name: "Foreign trained Nurses Tunisia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "CFWkO0BIhm8",
              cell_no: "D185",
              total: false,
              name: "Foreign trained Medical doctors Turkey"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "CFWkO0BIhm8",
              cell_no: "E185",
              total: false,
              name: "Foreign trained Nurses Turkey"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "yYCFsDkV7gN",
              cell_no: "D186",
              total: false,
              name: "Foreign trained Medical doctors Turkmenistan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "yYCFsDkV7gN",
              cell_no: "E186",
              total: false,
              name: "Foreign trained Nurses Turkmenistan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "uIUcjj7o0UF",
              cell_no: "D187",
              total: false,
              name: "Foreign trained Medical doctors Tuvalu"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "uIUcjj7o0UF",
              cell_no: "E187",
              total: false,
              name: "Foreign trained Nurses Tuvalu"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "tWMp2gMdZVY",
              cell_no: "D188",
              total: false,
              name: "Foreign trained Medical doctors Uganda"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "tWMp2gMdZVY",
              cell_no: "E188",
              total: false,
              name: "Foreign trained Nurses Uganda"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "btcWCYP4hid",
              cell_no: "D189",
              total: false,
              name: "Foreign trained Medical doctors Ukraine"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "btcWCYP4hid",
              cell_no: "E189",
              total: false,
              name: "Foreign trained Nurses Ukraine"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "CaEJOAbJqM8",
              cell_no: "D190",
              total: false,
              name: "Foreign trained Medical doctors United Arab Emirates"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "CaEJOAbJqM8",
              cell_no: "E190",
              total: false,
              name: "Foreign trained Nurses United Arab Emirates"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "sJuInXfi09r",
              cell_no: "D191",
              total: false,
              name:
                "Foreign trained Medical doctors United Kingdom of Great Britain and Northern Ireland"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "sJuInXfi09r",
              cell_no: "E191",
              total: false,
              name:
                "Foreign trained Nurses United Kingdom of Great Britain and Northern Ireland"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "JvWTmXsCHJj",
              cell_no: "D192",
              total: false,
              name:
                "Foreign trained Medical doctors United Republic of Tanzania"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "JvWTmXsCHJj",
              cell_no: "E192",
              total: false,
              name: "Foreign trained Nurses United Republic of Tanzania"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "sjuX99wm7IZ",
              cell_no: "D193",
              total: false,
              name: "Foreign trained Medical doctors United States of America"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "sjuX99wm7IZ",
              cell_no: "E193",
              total: false,
              name: "Foreign trained Nurses United States of America"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "DNEZnY8mN9a",
              cell_no: "D194",
              total: false,
              name: "Foreign trained Medical doctors Uruguay"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "DNEZnY8mN9a",
              cell_no: "E194",
              total: false,
              name: "Foreign trained Nurses Uruguay"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "MaLbWT81P7Q",
              cell_no: "D195",
              total: false,
              name: "Foreign trained Medical doctors Uzbekistan"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "MaLbWT81P7Q",
              cell_no: "E195",
              total: false,
              name: "Foreign trained Nurses Uzbekistan"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "sL6GUzUS18c",
              cell_no: "D196",
              total: false,
              name: "Foreign trained Medical doctors Vanuatu"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "sL6GUzUS18c",
              cell_no: "E196",
              total: false,
              name: "Foreign trained Nurses Vanuatu"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "y99mLrfSDOg",
              cell_no: "D197",
              total: false,
              name:
                "Foreign trained Medical doctors Venezuela (Bolivarian Republic of)"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "y99mLrfSDOg",
              cell_no: "E197",
              total: false,
              name: "Foreign trained Nurses Venezuela (Bolivarian Republic of)"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "jIuMMPDV6by",
              cell_no: "D198",
              total: false,
              name: "Foreign trained Medical doctors Viet Nam"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "jIuMMPDV6by",
              cell_no: "E198",
              total: false,
              name: "Foreign trained Nurses Viet Nam"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "gb8YWtxeYVR",
              cell_no: "D199",
              total: false,
              name: "Foreign trained Medical doctors Yemen"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "gb8YWtxeYVR",
              cell_no: "E199",
              total: false,
              name: "Foreign trained Nurses Yemen"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "g2hJEzpZfH1",
              cell_no: "D200",
              total: false,
              name: "Foreign trained Medical doctors Zambia"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "g2hJEzpZfH1",
              cell_no: "E200",
              total: false,
              name: "Foreign trained Nurses Zambia"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "IzLrdmSQGZs",
              cell_no: "D201",
              total: false,
              name: "Foreign trained Medical doctors Zimbabwe"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "IzLrdmSQGZs",
              cell_no: "E201",
              total: false,
              name: "Foreign trained Nurses Zimbabwe"
            },
            {
              deuid: "tu2P5ALJRow",
              cocuid: "kPgF27h5Zao",
              cell_no: "D202",
              total: false,
              name: "Foreign trained Medical doctors Other country"
            },
            {
              deuid: "Ni2b6zYWjjT",
              cocuid: "kPgF27h5Zao",
              cell_no: "E202",
              total: false,
              name: "Foreign trained Nurses Other country"
            }
          ]
        },
        {
          sheet_type: "AGGREGATE_STATIC_YES_ONLY",
          sheet_no: 4,
          sheet_name: "Source type",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "P2",
          year_cell: "M4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "fEck0UnAFaV",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type Ministry of Health"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type Other Ministries"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type National Statistical Office"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "rEUC186wftQ",
              cell_no: "U8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type Professional association"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type Academia"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type WHO databases"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type International organisations"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "fEck0UnAFaV",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA8",
              total: true,
              name:
                "Medical Doctors composition and distribution source type Other databases"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "rEUC186wftQ",
              cell_no: "U9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "idY7moseTTD",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA9",
              total: false,
              name:
                "General Medical Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "rEUC186wftQ",
              cell_no: "U10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "RfqYbGs8Za9",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA10",
              total: false,
              name:
                "Specialist Medical Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "rEUC186wftQ",
              cell_no: "U11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "nS0ZJGJUX0u",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA11",
              total: false,
              name:
                "General Paediatricians Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "rEUC186wftQ",
              cell_no: "U12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "bSvvw3Ms4BE",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA12",
              total: false,
              name:
                "Obstetricians and Gynaecologists Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "rEUC186wftQ",
              cell_no: "U13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "h3kClMEpMAy",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA13",
              total: false,
              name:
                "Psychiatrists Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "rEUC186wftQ",
              cell_no: "U14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "e3ba55rLVTZ",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA14",
              total: false,
              name:
                "Medical group of Specialists Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "rEUC186wftQ",
              cell_no: "U15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "KAU5IPKoIgx",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA15",
              total: false,
              name:
                "Surgical group of Specialists Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "rEUC186wftQ",
              cell_no: "U16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "bYXQMVmauLD",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA16",
              total: false,
              name:
                "Other Specialists Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type Ministry of Health"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type Other Ministries"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type National Statistical Office"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "rEUC186wftQ",
              cell_no: "U17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type Professional association"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type Academia"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type WHO databases"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type International organisations"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "pSRNRBuOBi8",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA17",
              total: false,
              name:
                "Medical doctors not further defined composition and distribution source type Other databases"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type Ministry of Health"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type Other Ministries"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type National Statistical Office"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "rEUC186wftQ",
              cell_no: "U18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type Professional association"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type Academia"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type WHO databases"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type International organisations"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "yrP0fOB2Yxv",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA18",
              total: true,
              name:
                "Nursing General Personnel composition and distribution source type Other databases"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "rEUC186wftQ",
              cell_no: "U19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type Professional association"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type Academia"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type International organisations"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "dutH7uvTAut",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA19",
              total: false,
              name:
                "Nursing Professionals composition and distribution source type Other databases"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type Ministry of Health"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type Other Ministries"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type National Statistical Office"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "rEUC186wftQ",
              cell_no: "U20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type Professional association"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type Academia"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type WHO databases"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type International organisations"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "Di6q414Mk6h",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA20",
              total: false,
              name:
                "Nursing Professionals with additional midwifery training composition and distribution source type Other databases"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "rEUC186wftQ",
              cell_no: "U21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type Professional association"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type Academia"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type International organisations"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "vtidz1k9BOw",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA21",
              total: false,
              name:
                "Nursing Associate Professionals composition and distribution source type Other databases"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type Ministry of Health"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type Other Ministries"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type National Statistical Office"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "rEUC186wftQ",
              cell_no: "U22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type Professional association"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type Academia"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type WHO databases"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type International organisations"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "FU6JZtf1IOo",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA22",
              total: false,
              name:
                "Nursing Associate Professionals with additional midwifery training composition and distribution source type Other databases"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type Ministry of Health"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type Other Ministries"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type National Statistical Office"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "rEUC186wftQ",
              cell_no: "U23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type Professional association"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type Academia"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type WHO databases"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type International organisations"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "MFUxfSaYW2e",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA23",
              total: false,
              name:
                "Nurses not further defined composition and distribution source type Other databases"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type Ministry of Health"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type Other Ministries"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type National Statistical Office"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "rEUC186wftQ",
              cell_no: "U24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type Professional association"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type Academia"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type WHO databases"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type International organisations"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "l1mCEuDf2ZI",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA24",
              total: true,
              name:
                "Midwifery personnel composition and distribution source type Other databases"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "rEUC186wftQ",
              cell_no: "U25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type Professional association"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type Academia"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type International organisations"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "ud6YiQ9ekgi",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA25",
              total: false,
              name:
                "Midwifery Professionals composition and distribution source type Other databases"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "rEUC186wftQ",
              cell_no: "U26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type Professional association"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type Academia"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type International organisations"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "LKiTYPmaOhj",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA26",
              total: false,
              name:
                "Midwifery Associate Professionals composition and distribution source type Other databases"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type Ministry of Health"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type Other Ministries"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type National Statistical Office"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "rEUC186wftQ",
              cell_no: "U27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type Professional association"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type Academia"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type WHO databases"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type International organisations"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "vnulYqEDjxA",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA27",
              total: false,
              name:
                "Midwives not further defined composition and distribution source type Other databases"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P28",
              total: false,
              name:
                "Dentists composition and distribution source type Ministry of Health"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q28",
              total: false,
              name:
                "Dentists composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R28",
              total: false,
              name:
                "Dentists composition and distribution source type Other Ministries"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S28",
              total: false,
              name:
                "Dentists composition and distribution source type National Statistical Office"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T28",
              total: false,
              name:
                "Dentists composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "rEUC186wftQ",
              cell_no: "U28",
              total: false,
              name:
                "Dentists composition and distribution source type Professional association"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V28",
              total: false,
              name:
                "Dentists composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W28",
              total: false,
              name: "Dentists composition and distribution source type Academia"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X28",
              total: false,
              name:
                "Dentists composition and distribution source type WHO databases"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y28",
              total: false,
              name:
                "Dentists composition and distribution source type International organisations"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z28",
              total: false,
              name:
                "Dentists composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "P5RXZZXrLGM",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA28",
              total: false,
              name:
                "Dentists composition and distribution source type Other databases"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type Ministry of Health"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type Other Ministries"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type National Statistical Office"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "rEUC186wftQ",
              cell_no: "U29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type Professional association"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type Academia"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type WHO databases"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type International organisations"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "ON8DBreBXlt",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA29",
              total: false,
              name:
                "Dental Assistants and Therapists composition and distribution source type Other databases"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type Ministry of Health"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type Other Ministries"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type National Statistical Office"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "rEUC186wftQ",
              cell_no: "U30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type Professional association"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type Academia"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type WHO databases"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type International organisations"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "SRSiY1qW6W8",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA30",
              total: false,
              name:
                "Dental Prosthetic Technicians composition and distribution source type Other databases"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P31",
              total: false,
              name:
                "Pharmacists composition and distribution source type Ministry of Health"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q31",
              total: false,
              name:
                "Pharmacists composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R31",
              total: false,
              name:
                "Pharmacists composition and distribution source type Other Ministries"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S31",
              total: false,
              name:
                "Pharmacists composition and distribution source type National Statistical Office"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T31",
              total: false,
              name:
                "Pharmacists composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "rEUC186wftQ",
              cell_no: "U31",
              total: false,
              name:
                "Pharmacists composition and distribution source type Professional association"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V31",
              total: false,
              name:
                "Pharmacists composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W31",
              total: false,
              name:
                "Pharmacists composition and distribution source type Academia"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X31",
              total: false,
              name:
                "Pharmacists composition and distribution source type WHO databases"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y31",
              total: false,
              name:
                "Pharmacists composition and distribution source type International organisations"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z31",
              total: false,
              name:
                "Pharmacists composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "M1hZV0c1jpw",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA31",
              total: false,
              name:
                "Pharmacists composition and distribution source type Other databases"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type Ministry of Health"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type Other Ministries"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type National Statistical Office"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "rEUC186wftQ",
              cell_no: "U32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type Professional association"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type Academia"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type WHO databases"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type International organisations"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "Va9QjeOhGZa",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA32",
              total: false,
              name:
                "Pharmaceutical Technicians and Assistants composition and distribution source type Other databases"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type Ministry of Health"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type Other Ministries"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type National Statistical Office"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "rEUC186wftQ",
              cell_no: "U33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type Professional association"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type Academia"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type WHO databases"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type International organisations"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "E6yC5xp14iQ",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA33",
              total: false,
              name:
                "Paramedical Practitioners composition and distribution source type Other databases"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type Ministry of Health"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type Other Ministries"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type National Statistical Office"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "rEUC186wftQ",
              cell_no: "U34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type Professional association"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type Academia"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type WHO databases"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type International organisations"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "zmJu31AVVts",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA34",
              total: false,
              name:
                "Medical and Pathology Laboratory scientists composition and distribution source type Other databases"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type Ministry of Health"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type Other Ministries"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type National Statistical Office"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "rEUC186wftQ",
              cell_no: "U35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type Professional association"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type Academia"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type WHO databases"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type International organisations"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "HmC6k52OuR4",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA35",
              total: false,
              name:
                "Medical Imaging and Therapeutic Equipment Technicians composition and distribution source type Other databases"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type Ministry of Health"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type Other Ministries"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type National Statistical Office"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "rEUC186wftQ",
              cell_no: "U36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type Professional association"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type Academia"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type WHO databases"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type International organisations"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "eP4EDcfclsH",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA36",
              total: false,
              name:
                "Medical and Pathology Laboratory Technicians  composition and distribution source type Other databases"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "rEUC186wftQ",
              cell_no: "U37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type Professional association"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type Academia"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type International organisations"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "cnxVb8H17tm",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA37",
              total: false,
              name:
                "Environmental and Occupational Health and Hygiene Professionals composition and distribution source type Other databases"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type Ministry of Health"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type Other Ministries"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type National Statistical Office"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "rEUC186wftQ",
              cell_no: "U38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type Professional association"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type Academia"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type WHO databases"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type International organisations"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "mnfnutsHsxh",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA38",
              total: false,
              name:
                "Environmental and Occupational Health Inspectors and Associates composition and distribution source type Other databases"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "rEUC186wftQ",
              cell_no: "U39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type Professional association"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type Academia"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type International organisations"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "hiSNbC7WWAb",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA39",
              total: false,
              name:
                "Traditional and Complementary Medicine Professionals composition and distribution source type Other databases"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "rEUC186wftQ",
              cell_no: "U40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type Professional association"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type Academia"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type International organisations"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "PXZbVlkKwcw",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA40",
              total: false,
              name:
                "Traditional and Complementary Medicine Associate Professionals composition and distribution source type Other databases"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type Ministry of Health"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type Other Ministries"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type National Statistical Office"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "rEUC186wftQ",
              cell_no: "U41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type Professional association"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type Academia"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type WHO databases"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type International organisations"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "TcSxFdjVWEh",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA41",
              total: false,
              name:
                "Community Health Workers composition and distribution source type Other databases"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type Ministry of Health"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type Other Ministries"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type National Statistical Office"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "rEUC186wftQ",
              cell_no: "U42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type Professional association"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type Academia"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type WHO databases"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type International organisations"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "ZtjIuqdv5S7",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA42",
              total: false,
              name:
                "Personal care workers  composition and distribution source type Other databases"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type Ministry of Health"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type Other Ministries"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type National Statistical Office"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "rEUC186wftQ",
              cell_no: "U43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type Professional association"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type Academia"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type WHO databases"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type International organisations"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "BgJoMJEnaO1",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA43",
              total: false,
              name:
                "Health Care Assistants composition and distribution source type Other databases"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type Ministry of Health"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type Other Ministries"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type National Statistical Office"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "rEUC186wftQ",
              cell_no: "U44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type Professional association"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type Academia"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type WHO databases"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type International organisations"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "LO5oNfvohPx",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA44",
              total: false,
              name:
                "Home-based Personal Care Workers composition and distribution source type Other databases"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type Ministry of Health"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type Other Ministries"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type National Statistical Office"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "rEUC186wftQ",
              cell_no: "U45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type Professional association"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type Academia"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type WHO databases"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type International organisations"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "uQe1J0rpnwS",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA45",
              total: false,
              name:
                "Personal care workers in health services n.e.c composition and distribution source type Other databases"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type Ministry of Health"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type Other Ministries"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type National Statistical Office"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "rEUC186wftQ",
              cell_no: "U46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type Professional association"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type Academia"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type WHO databases"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type International organisations"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "XIHIwocWj9J",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA46",
              total: false,
              name:
                "Physiotherapists composition and distribution source type Other databases"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type Ministry of Health"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type Other Ministries"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type National Statistical Office"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "rEUC186wftQ",
              cell_no: "U47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type Professional association"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type Academia"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type WHO databases"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type International organisations"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "RK9mngtJtTL",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA47",
              total: false,
              name:
                "Physiotherapy Technicians and Assistants composition and distribution source type Other databases"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P48",
              total: false,
              name:
                "Dieticians  composition and distribution source type Ministry of Health"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q48",
              total: false,
              name:
                "Dieticians  composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R48",
              total: false,
              name:
                "Dieticians  composition and distribution source type Other Ministries"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S48",
              total: false,
              name:
                "Dieticians  composition and distribution source type National Statistical Office"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T48",
              total: false,
              name:
                "Dieticians  composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "rEUC186wftQ",
              cell_no: "U48",
              total: false,
              name:
                "Dieticians  composition and distribution source type Professional association"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V48",
              total: false,
              name:
                "Dieticians  composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W48",
              total: false,
              name:
                "Dieticians  composition and distribution source type Academia"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X48",
              total: false,
              name:
                "Dieticians  composition and distribution source type WHO databases"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y48",
              total: false,
              name:
                "Dieticians  composition and distribution source type International organisations"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z48",
              total: false,
              name:
                "Dieticians  composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "D2MFGJKtc1Y",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA48",
              total: false,
              name:
                "Dieticians  composition and distribution source type Other databases"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P49",
              total: false,
              name:
                "Nutritionists composition and distribution source type Ministry of Health"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q49",
              total: false,
              name:
                "Nutritionists composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R49",
              total: false,
              name:
                "Nutritionists composition and distribution source type Other Ministries"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S49",
              total: false,
              name:
                "Nutritionists composition and distribution source type National Statistical Office"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T49",
              total: false,
              name:
                "Nutritionists composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "rEUC186wftQ",
              cell_no: "U49",
              total: false,
              name:
                "Nutritionists composition and distribution source type Professional association"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V49",
              total: false,
              name:
                "Nutritionists composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W49",
              total: false,
              name:
                "Nutritionists composition and distribution source type Academia"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X49",
              total: false,
              name:
                "Nutritionists composition and distribution source type WHO databases"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y49",
              total: false,
              name:
                "Nutritionists composition and distribution source type International organisations"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z49",
              total: false,
              name:
                "Nutritionists composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "m4eOcU1zHtL",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA49",
              total: false,
              name:
                "Nutritionists composition and distribution source type Other databases"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type Ministry of Health"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type Other Ministries"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type National Statistical Office"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "rEUC186wftQ",
              cell_no: "U50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type Professional association"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type Academia"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type WHO databases"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type International organisations"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "VZnZ8xJoaIW",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA50",
              total: false,
              name:
                "Audiologists and Speech Therapists composition and distribution source type Other databases"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type Ministry of Health"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type Other Ministries"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type National Statistical Office"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "rEUC186wftQ",
              cell_no: "U51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type Professional association"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type Academia"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type WHO databases"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type International organisations"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "rsmgY2HkHEf",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA51",
              total: false,
              name:
                "Optometrists and Ophthalmic Opticians composition and distribution source type Other databases"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type Ministry of Health"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type Other Ministries"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type National Statistical Office"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "rEUC186wftQ",
              cell_no: "U52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type Professional association"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type Academia"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type WHO databases"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type International organisations"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "A8qvwcGQ7oR",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA52",
              total: false,
              name:
                "Dispensing Opticians composition and distribution source type Other databases"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type Ministry of Health"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type Other Ministries"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type National Statistical Office"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "rEUC186wftQ",
              cell_no: "U53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type Professional association"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type Academia"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type WHO databases"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type International organisations"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "HLgQXol1EPh",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA53",
              total: false,
              name:
                "Medical Prosthetic Technicians composition and distribution source type Other databases"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type Ministry of Health"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type Other Ministries"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type National Statistical Office"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "rEUC186wftQ",
              cell_no: "U54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type Professional association"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type Academia"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type WHO databases"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type International organisations"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "tWmFeJagj87",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA54",
              total: false,
              name:
                "Medical Records and Health Information Technicians composition and distribution source type Other databases"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type Ministry of Health"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type Other Ministries"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type National Statistical Office"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "rEUC186wftQ",
              cell_no: "U55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type Professional association"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type Academia"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type WHO databases"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type International organisations"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "EojH3xtSttx",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA55",
              total: false,
              name:
                "Medical Assistants composition and distribution source type Other databases"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type Ministry of Health"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type Other Ministries"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type National Statistical Office"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "rEUC186wftQ",
              cell_no: "U56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type Professional association"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type Academia"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type WHO databases"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type International organisations"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "HeI3osYsbQa",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA56",
              total: false,
              name:
                "Ambulance Workers composition and distribution source type Other databases"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "rEUC186wftQ",
              cell_no: "U57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type Professional association"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type Academia"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type International organisations"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "cxmJyqa1T5C",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA57",
              total: false,
              name:
                "Social work and counselling professionals composition and distribution source type Other databases"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type Ministry of Health"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type Other Ministries"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type National Statistical Office"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "rEUC186wftQ",
              cell_no: "U58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type Professional association"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type Academia"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type WHO databases"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type International organisations"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "eA4qiSbPKdb",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA58",
              total: false,
              name:
                "Social work associate professionals composition and distribution source type Other databases"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type Ministry of Health"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type Other Ministries"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type National Statistical Office"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "rEUC186wftQ",
              cell_no: "U59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type Professional association"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type Academia"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type WHO databases"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type International organisations"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "Ngzlv0PnZHM",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA59",
              total: false,
              name:
                "Biomedical engineer composition and distribution source type Other databases"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P60",
              total: false,
              name: "Psychologists stock source type Ministry of Health"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q60",
              total: false,
              name: "Psychologists stock source type Ministry of Labour"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R60",
              total: false,
              name: "Psychologists stock source type Other Ministries"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S60",
              total: false,
              name:
                "Psychologists stock source type National Statistical Office"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T60",
              total: false,
              name: "Psychologists stock source type National HRH Observatory"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "rEUC186wftQ",
              cell_no: "U60",
              total: false,
              name: "Psychologists stock source type Professional association"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V60",
              total: false,
              name: "Psychologists stock source type Regulatory bodies"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W60",
              total: false,
              name: "Psychologists stock source type Academia"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X60",
              total: false,
              name: "Psychologists stock source type WHO databases"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y60",
              total: false,
              name:
                "Psychologists stock source type International organisations"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z60",
              total: false,
              name:
                "Psychologists stock source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "tZ3CM9qXx2R",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA60",
              total: false,
              name: "Psychologists stock source type Other databases"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P61",
              total: false,
              name: "Medical secretaries stock source type Ministry of Health"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q61",
              total: false,
              name: "Medical secretaries stock source type Ministry of Labour"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R61",
              total: false,
              name: "Medical secretaries stock source type Other Ministries"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S61",
              total: false,
              name:
                "Medical secretaries stock source type National Statistical Office"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T61",
              total: false,
              name:
                "Medical secretaries stock source type National HRH Observatory"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "rEUC186wftQ",
              cell_no: "U61",
              total: false,
              name:
                "Medical secretaries stock source type Professional association"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V61",
              total: false,
              name: "Medical secretaries stock source type Regulatory bodies"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W61",
              total: false,
              name: "Medical secretaries stock source type Academia"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X61",
              total: false,
              name: "Medical secretaries stock source type WHO databases"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y61",
              total: false,
              name:
                "Medical secretaries stock source type International organisations"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z61",
              total: false,
              name:
                "Medical secretaries stock source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "HhQgAcNaKUv",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA61",
              total: false,
              name: "Medical secretaries stock source type Other databases"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P62",
              total: false,
              name:
                "Managerial staff composition and distribution source type Ministry of Health"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q62",
              total: false,
              name:
                "Managerial staff composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R62",
              total: false,
              name:
                "Managerial staff composition and distribution source type Other Ministries"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S62",
              total: false,
              name:
                "Managerial staff composition and distribution source type National Statistical Office"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T62",
              total: false,
              name:
                "Managerial staff composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "rEUC186wftQ",
              cell_no: "U62",
              total: false,
              name:
                "Managerial staff composition and distribution source type Professional association"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V62",
              total: false,
              name:
                "Managerial staff composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W62",
              total: false,
              name:
                "Managerial staff composition and distribution source type Academia"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X62",
              total: false,
              name:
                "Managerial staff composition and distribution source type WHO databases"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y62",
              total: false,
              name:
                "Managerial staff composition and distribution source type International organisations"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z62",
              total: false,
              name:
                "Managerial staff composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "jxUmQ1pAqyo",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA62",
              total: false,
              name:
                "Managerial staff composition and distribution source type Other databases"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P63",
              total: false,
              name:
                "Administrative staff composition and distribution source type Ministry of Health"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q63",
              total: false,
              name:
                "Administrative staff composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R63",
              total: false,
              name:
                "Administrative staff composition and distribution source type Other Ministries"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S63",
              total: false,
              name:
                "Administrative staff composition and distribution source type National Statistical Office"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T63",
              total: false,
              name:
                "Administrative staff composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "rEUC186wftQ",
              cell_no: "U63",
              total: false,
              name:
                "Administrative staff composition and distribution source type Professional association"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V63",
              total: false,
              name:
                "Administrative staff composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W63",
              total: false,
              name:
                "Administrative staff composition and distribution source type Academia"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X63",
              total: false,
              name:
                "Administrative staff composition and distribution source type WHO databases"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y63",
              total: false,
              name:
                "Administrative staff composition and distribution source type International organisations"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z63",
              total: false,
              name:
                "Administrative staff composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "Gi4BzUhTjYb",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA63",
              total: false,
              name:
                "Administrative staff composition and distribution source type Other databases"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type Ministry of Health"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type Other Ministries"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type National Statistical Office"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "rEUC186wftQ",
              cell_no: "U64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type Professional association"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type Academia"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type WHO databases"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type International organisations"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "cs7H0NFWgV1",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA64",
              total: false,
              name:
                "Health information systems personnel composition and distribution source type Other databases"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type Ministry of Health"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type Other Ministries"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type National Statistical Office"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "rEUC186wftQ",
              cell_no: "U65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type Professional association"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type Academia"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type WHO databases"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type International organisations"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "Ls5uiJRlx9L",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA65",
              total: false,
              name:
                "Engineering and maintenance staff composition and distribution source type Other databases"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type Ministry of Health"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type Other Ministries"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type National Statistical Office"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "rEUC186wftQ",
              cell_no: "U66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type Professional association"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type Academia"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type WHO databases"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type International organisations"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "hTbGyO8zzbu",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA66",
              total: false,
              name:
                "Other non-medical professional staff composition and distribution source type Other databases"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "LvGn3KFEzvA",
              cell_no: "P67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type Ministry of Health"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "MXfWGD11wLh",
              cell_no: "Q67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type Ministry of Labour"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "wcnRf5LJrnK",
              cell_no: "R67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type Other Ministries"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "hC2N9T8F5JD",
              cell_no: "S67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type National Statistical Office"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "eWjpUQpzWKX",
              cell_no: "T67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type National HRH Observatory"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "rEUC186wftQ",
              cell_no: "U67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type Professional association"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "ADfCJWnnU2O",
              cell_no: "V67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type Regulatory bodies"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "bj9TvyIDtwi",
              cell_no: "W67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type Academia"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "IhnQTXo2sCi",
              cell_no: "X67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type WHO databases"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "lcB0UtS4nuB",
              cell_no: "Y67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type International organisations"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "P5jMO9Y0SRn",
              cell_no: "Z67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type OECD/Eurostat/WHO-EURO Questionnaire"
            },
            {
              deuid: "zVBLVa1TCTI",
              cocuid: "xgbBSeyiDWp",
              cell_no: "AA67",
              total: false,
              name:
                "Other non-medical support staff composition and distribution source type Other databases"
            }
          ]
        }
      ]
    },
    {
      name: "Module 4 Template",
      file: "NHWA_Module_4.xlsx",
      sheets: [
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 1,
          sheet_name: "Entry into Labour Market",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "V2",
          year_cell: "I4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "KzzMv68cifG",
              cocuid: "HQPWV8cT7li",
              cell_no: "D9",
              total: false,
              name:
                "Total expenditure on higher education (including for non-health sectors) Government"
            },
            {
              deuid: "KzzMv68cifG",
              cocuid: "FiRcnmXF1Yg",
              cell_no: "E9",
              total: false,
              name:
                "Total expenditure on higher education (including for non-health sectors) Out of Pocket"
            },
            {
              deuid: "KzzMv68cifG",
              cocuid: "QKhM7ublqzd",
              cell_no: "F9",
              total: false,
              name:
                "Total expenditure on higher education (including for non-health sectors) Official Development Assistance"
            },
            {
              deuid: "KzzMv68cifG",
              cocuid: "txxKPnVUGvV",
              cell_no: "G9",
              total: false,
              name:
                "Total expenditure on higher education (including for non-health sectors) Others"
            },
            {
              deuid: "Z6Wd8wiIAfz",
              cocuid: "HQPWV8cT7li",
              cell_no: "D10",
              total: false,
              name:
                "Total expenditure on health workforce pre-service education By Ownership Government"
            },
            {
              deuid: "Z6Wd8wiIAfz",
              cocuid: "FiRcnmXF1Yg",
              cell_no: "E10",
              total: false,
              name:
                "Total expenditure on health workforce pre-service education By Ownership Out of Pocket"
            },
            {
              deuid: "Z6Wd8wiIAfz",
              cocuid: "QKhM7ublqzd",
              cell_no: "F10",
              total: false,
              name:
                "Total expenditure on health workforce pre-service education By Ownership Official Development Assistance"
            },
            {
              deuid: "Z6Wd8wiIAfz",
              cocuid: "txxKPnVUGvV",
              cell_no: "G10",
              total: false,
              name:
                "Total expenditure on health workforce pre-service education By Ownership Others"
            },
            {
              deuid: "Ybz3qUCWYKC",
              cocuid: "I93t0K7b1oN",
              cell_no: "Q18",
              total: false,
              name:
                "Existence of national health workforce strategies and national institutional financing reforms that identify and commit adequate budgetary resources for transformative education Yes"
            },
            {
              deuid: "Ybz3qUCWYKC",
              cocuid: "Xgr3PJxcWfJ",
              cell_no: "R18",
              total: false,
              name:
                "Existence of national health workforce strategies and national institutional financing reforms that identify and commit adequate budgetary resources for transformative education Partial"
            },
            {
              deuid: "Ybz3qUCWYKC",
              cocuid: "Y7EAGQA1bfv",
              cell_no: "S18",
              total: false,
              name:
                "Existence of national health workforce strategies and national institutional financing reforms that identify and commit adequate budgetary resources for transformative education No"
            }
          ]
        },
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 2,
          sheet_name: "Cost per program",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "N2",
          year_cell: "I4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "EI6IOp5v4dR",
              cocuid: "aBpbcEgtzgw",
              cell_no: "D9",
              total: false,
              name: "Tuition Fee by Student enrolled Medical Doctors"
            },
            {
              deuid: "FQpontg7YBJ",
              cocuid: "aBpbcEgtzgw",
              cell_no: "E9",
              total: false,
              name: "Public Expenditure on HWF education Medical Doctors"
            },
            {
              deuid: "tsRGEPI6G9W",
              cocuid: "aBpbcEgtzgw",
              cell_no: "F9",
              total: false,
              name: "Private Expenditure on HWF education Medical Doctors"
            },
            {
              deuid: "FM20fzfsNov",
              cocuid: "aBpbcEgtzgw",
              cell_no: "G9",
              total: false,
              name: "Recurrent costs of qualified educators Medical Doctors"
            },
            {
              deuid: "EI6IOp5v4dR",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "D10",
              total: false,
              name:
                "Tuition Fee by Student enrolled Generalist Medical Practitioner"
            },
            {
              deuid: "FQpontg7YBJ",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "E10",
              total: false,
              name:
                "Public Expenditure on HWF education Generalist Medical Practitioner"
            },
            {
              deuid: "tsRGEPI6G9W",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "F10",
              total: false,
              name:
                "Private Expenditure on HWF education Generalist Medical Practitioner"
            },
            {
              deuid: "FM20fzfsNov",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "G10",
              total: false,
              name:
                "Recurrent costs of qualified educators Generalist Medical Practitioner"
            },
            {
              deuid: "EI6IOp5v4dR",
              cocuid: "VtVkbvygJnm",
              cell_no: "D11",
              total: false,
              name:
                "Tuition Fee by Student enrolled Specialist Medical Practitioner"
            },
            {
              deuid: "FQpontg7YBJ",
              cocuid: "VtVkbvygJnm",
              cell_no: "E11",
              total: false,
              name:
                "Public Expenditure on HWF education Specialist Medical Practitioner"
            },
            {
              deuid: "tsRGEPI6G9W",
              cocuid: "VtVkbvygJnm",
              cell_no: "F11",
              total: false,
              name:
                "Private Expenditure on HWF education Specialist Medical Practitioner"
            },
            {
              deuid: "FM20fzfsNov",
              cocuid: "VtVkbvygJnm",
              cell_no: "G11",
              total: false,
              name:
                "Recurrent costs of qualified educators Specialist Medical Practitioner"
            },
            {
              deuid: "EI6IOp5v4dR",
              cocuid: "fGOgbIqsxDn",
              cell_no: "D12",
              total: false,
              name: "Tuition Fee by Student enrolled Nursing Professional"
            },
            {
              deuid: "FQpontg7YBJ",
              cocuid: "fGOgbIqsxDn",
              cell_no: "E12",
              total: false,
              name: "Public Expenditure on HWF education Nursing Professional"
            },
            {
              deuid: "tsRGEPI6G9W",
              cocuid: "fGOgbIqsxDn",
              cell_no: "F12",
              total: false,
              name: "Private Expenditure on HWF education Nursing Professional"
            },
            {
              deuid: "FM20fzfsNov",
              cocuid: "fGOgbIqsxDn",
              cell_no: "G12",
              total: false,
              name:
                "Recurrent costs of qualified educators Nursing Professional"
            },
            {
              deuid: "EI6IOp5v4dR",
              cocuid: "MPzyVWiSFF2",
              cell_no: "D13",
              total: false,
              name: "Tuition Fee by Student enrolled Midwifery Professional"
            },
            {
              deuid: "FQpontg7YBJ",
              cocuid: "MPzyVWiSFF2",
              cell_no: "E13",
              total: false,
              name: "Public Expenditure on HWF education Midwifery Professional"
            },
            {
              deuid: "tsRGEPI6G9W",
              cocuid: "MPzyVWiSFF2",
              cell_no: "F13",
              total: false,
              name:
                "Private Expenditure on HWF education Midwifery Professional"
            },
            {
              deuid: "FM20fzfsNov",
              cocuid: "MPzyVWiSFF2",
              cell_no: "G13",
              total: false,
              name:
                "Recurrent costs of qualified educators Midwifery Professional"
            },
            {
              deuid: "EI6IOp5v4dR",
              cocuid: "ALBRKpJsddQ",
              cell_no: "D14",
              total: false,
              name: "Tuition Fee by Student enrolled Dentist"
            },
            {
              deuid: "FQpontg7YBJ",
              cocuid: "ALBRKpJsddQ",
              cell_no: "E14",
              total: false,
              name: "Public Expenditure on HWF education Dentist"
            },
            {
              deuid: "tsRGEPI6G9W",
              cocuid: "ALBRKpJsddQ",
              cell_no: "F14",
              total: false,
              name: "Private Expenditure on HWF education Dentist"
            },
            {
              deuid: "FM20fzfsNov",
              cocuid: "ALBRKpJsddQ",
              cell_no: "G14",
              total: false,
              name: "Recurrent costs of qualified educators Dentist"
            },
            {
              deuid: "EI6IOp5v4dR",
              cocuid: "iWRW6jXAzvP",
              cell_no: "D15",
              total: false,
              name: "Tuition Fee by Student enrolled Pharmacist"
            },
            {
              deuid: "FQpontg7YBJ",
              cocuid: "iWRW6jXAzvP",
              cell_no: "E15",
              total: false,
              name: "Public Expenditure on HWF education Pharmacist"
            },
            {
              deuid: "tsRGEPI6G9W",
              cocuid: "iWRW6jXAzvP",
              cell_no: "F15",
              total: false,
              name: "Private Expenditure on HWF education Pharmacist"
            },
            {
              deuid: "FM20fzfsNov",
              cocuid: "iWRW6jXAzvP",
              cell_no: "G15",
              total: false,
              name: "Recurrent costs of qualified educators Pharmacist"
            }
          ]
        },
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 3,
          sheet_name: "Specialist Costs",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "P2",
          year_cell: "I4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "ie5rMMLaKoX",
              cocuid: "qJgX0mO3ph7",
              cell_no: "D9",
              total: false,
              name:
                "Total cost per graduate in medical specialist education programme General Paediatricians Practitioner"
            },
            {
              deuid: "VGwyxy87JTn",
              cocuid: "qJgX0mO3ph7",
              cell_no: "E9",
              total: false,
              name:
                "Public cost per graduate in medical specialist education programme General Paediatricians Practitioner"
            },
            {
              deuid: "qwZoBgLRrQf",
              cocuid: "qJgX0mO3ph7",
              cell_no: "F9",
              total: false,
              name:
                "Private (OoP) cost per graduate in medical specialist education programme General Paediatricians Practitioner"
            },
            {
              deuid: "Rx0MR32LJoK",
              cocuid: "qJgX0mO3ph7",
              cell_no: "G9",
              total: false,
              name:
                "Private (ODA) cost per graduate in medical specialist education programme General Paediatricians Practitioner"
            },
            {
              deuid: "uEqspl3rRlH",
              cocuid: "qJgX0mO3ph7",
              cell_no: "H9",
              total: false,
              name:
                "Private (Other) cost per graduate in medical specialist education programme General Paediatricians Practitioner"
            },
            {
              deuid: "ie5rMMLaKoX",
              cocuid: "ABubevCpjCV",
              cell_no: "D10",
              total: false,
              name:
                "Total cost per graduate in medical specialist education programme Obstetricians and Gynaecologists Practitioner"
            },
            {
              deuid: "VGwyxy87JTn",
              cocuid: "ABubevCpjCV",
              cell_no: "E10",
              total: false,
              name:
                "Public cost per graduate in medical specialist education programme Obstetricians and Gynaecologists Practitioner"
            },
            {
              deuid: "qwZoBgLRrQf",
              cocuid: "ABubevCpjCV",
              cell_no: "F10",
              total: false,
              name:
                "Private (OoP) cost per graduate in medical specialist education programme Obstetricians and Gynaecologists Practitioner"
            },
            {
              deuid: "Rx0MR32LJoK",
              cocuid: "ABubevCpjCV",
              cell_no: "G10",
              total: false,
              name:
                "Private (ODA) cost per graduate in medical specialist education programme Obstetricians and Gynaecologists Practitioner"
            },
            {
              deuid: "uEqspl3rRlH",
              cocuid: "ABubevCpjCV",
              cell_no: "H10",
              total: false,
              name:
                "Private (Other) cost per graduate in medical specialist education programme Obstetricians and Gynaecologists Practitioner"
            },
            {
              deuid: "ie5rMMLaKoX",
              cocuid: "wNJfYD50ZVE",
              cell_no: "D11",
              total: false,
              name:
                "Total cost per graduate in medical specialist education programme Psychiatrists Practitioner"
            },
            {
              deuid: "VGwyxy87JTn",
              cocuid: "wNJfYD50ZVE",
              cell_no: "E11",
              total: false,
              name:
                "Public cost per graduate in medical specialist education programme Psychiatrists Practitioner"
            },
            {
              deuid: "qwZoBgLRrQf",
              cocuid: "wNJfYD50ZVE",
              cell_no: "F11",
              total: false,
              name:
                "Private (OoP) cost per graduate in medical specialist education programme Psychiatrists Practitioner"
            },
            {
              deuid: "Rx0MR32LJoK",
              cocuid: "wNJfYD50ZVE",
              cell_no: "G11",
              total: false,
              name:
                "Private (ODA) cost per graduate in medical specialist education programme Psychiatrists Practitioner"
            },
            {
              deuid: "uEqspl3rRlH",
              cocuid: "wNJfYD50ZVE",
              cell_no: "H11",
              total: false,
              name:
                "Private (Other) cost per graduate in medical specialist education programme Psychiatrists Practitioner"
            },
            {
              deuid: "ie5rMMLaKoX",
              cocuid: "ByPnGTyTmYa",
              cell_no: "D12",
              total: false,
              name:
                "Total cost per graduate in medical specialist education programme Medical group of Specialists Practitioner"
            },
            {
              deuid: "VGwyxy87JTn",
              cocuid: "ByPnGTyTmYa",
              cell_no: "E12",
              total: false,
              name:
                "Public cost per graduate in medical specialist education programme Medical group of Specialists Practitioner"
            },
            {
              deuid: "qwZoBgLRrQf",
              cocuid: "ByPnGTyTmYa",
              cell_no: "F12",
              total: false,
              name:
                "Private (OoP) cost per graduate in medical specialist education programme Medical group of Specialists Practitioner"
            },
            {
              deuid: "Rx0MR32LJoK",
              cocuid: "ByPnGTyTmYa",
              cell_no: "G12",
              total: false,
              name:
                "Private (ODA) cost per graduate in medical specialist education programme Medical group of Specialists Practitioner"
            },
            {
              deuid: "uEqspl3rRlH",
              cocuid: "ByPnGTyTmYa",
              cell_no: "H12",
              total: false,
              name:
                "Private (Other) cost per graduate in medical specialist education programme Medical group of Specialists Practitioner"
            },
            {
              deuid: "ie5rMMLaKoX",
              cocuid: "wJfQhJWdeLX",
              cell_no: "D13",
              total: false,
              name:
                "Total cost per graduate in medical specialist education programme Surgical group of Specialists Practitioner"
            },
            {
              deuid: "VGwyxy87JTn",
              cocuid: "wJfQhJWdeLX",
              cell_no: "E13",
              total: false,
              name:
                "Public cost per graduate in medical specialist education programme Surgical group of Specialists Practitioner"
            },
            {
              deuid: "qwZoBgLRrQf",
              cocuid: "wJfQhJWdeLX",
              cell_no: "F13",
              total: false,
              name:
                "Private (OoP) cost per graduate in medical specialist education programme Surgical group of Specialists Practitioner"
            },
            {
              deuid: "Rx0MR32LJoK",
              cocuid: "wJfQhJWdeLX",
              cell_no: "G13",
              total: false,
              name:
                "Private (ODA) cost per graduate in medical specialist education programme Surgical group of Specialists Practitioner"
            },
            {
              deuid: "uEqspl3rRlH",
              cocuid: "wJfQhJWdeLX",
              cell_no: "H13",
              total: false,
              name:
                "Private (Other) cost per graduate in medical specialist education programme Surgical group of Specialists Practitioner"
            },
            {
              deuid: "ie5rMMLaKoX",
              cocuid: "EfAbB5kdjLD",
              cell_no: "D14",
              total: false,
              name:
                "Total cost per graduate in medical specialist education programme Other Specialists Practitioner"
            },
            {
              deuid: "VGwyxy87JTn",
              cocuid: "EfAbB5kdjLD",
              cell_no: "E14",
              total: false,
              name:
                "Public cost per graduate in medical specialist education programme Other Specialists Practitioner"
            },
            {
              deuid: "qwZoBgLRrQf",
              cocuid: "EfAbB5kdjLD",
              cell_no: "F14",
              total: false,
              name:
                "Private (OoP) cost per graduate in medical specialist education programme Other Specialists Practitioner"
            },
            {
              deuid: "Rx0MR32LJoK",
              cocuid: "EfAbB5kdjLD",
              cell_no: "G14",
              total: false,
              name:
                "Private (ODA) cost per graduate in medical specialist education programme Other Specialists Practitioner"
            },
            {
              deuid: "uEqspl3rRlH",
              cocuid: "EfAbB5kdjLD",
              cell_no: "H14",
              total: false,
              name:
                "Private (Other) cost per graduate in medical specialist education programme Other Specialists Practitioner"
            }
          ]
        },
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 4,
          sheet_name: "Lifelong Learning",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "N2",
          year_cell: "I4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "k31vRXPe1UA",
              cocuid: "aBpbcEgtzgw",
              cell_no: "D11",
              total: false,
              name:
                "Public expenditure on Continuing Professional Development Medical Doctors"
            },
            {
              deuid: "go9xficYy4f",
              cocuid: "aBpbcEgtzgw",
              cell_no: "E11",
              total: false,
              name:
                "Out of Pockets expenditure on Continuing Professional Development Medical Doctors"
            },
            {
              deuid: "BMJGeU5QjPU",
              cocuid: "aBpbcEgtzgw",
              cell_no: "F11",
              total: false,
              name:
                "Official Development Assistanc expenditure on Continuing Professional Development Medical Doctors"
            },
            {
              deuid: "hUqp2FZFNGA",
              cocuid: "aBpbcEgtzgw",
              cell_no: "G11",
              total: false,
              name:
                "Others expenditure on Continuing Professional Development Medical Doctors"
            },
            {
              deuid: "k31vRXPe1UA",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "D12",
              total: false,
              name:
                "Public expenditure on Continuing Professional Development Generalist Medical Practitioner"
            },
            {
              deuid: "go9xficYy4f",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "E12",
              total: false,
              name:
                "Out of Pockets expenditure on Continuing Professional Development Generalist Medical Practitioner"
            },
            {
              deuid: "BMJGeU5QjPU",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "F12",
              total: false,
              name:
                "Official Development Assistanc expenditure on Continuing Professional Development Generalist Medical Practitioner"
            },
            {
              deuid: "hUqp2FZFNGA",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "G12",
              total: false,
              name:
                "Others expenditure on Continuing Professional Development Generalist Medical Practitioner"
            },
            {
              deuid: "k31vRXPe1UA",
              cocuid: "VtVkbvygJnm",
              cell_no: "D13",
              total: false,
              name:
                "Public expenditure on Continuing Professional Development Specialist Medical Practitioner"
            },
            {
              deuid: "go9xficYy4f",
              cocuid: "VtVkbvygJnm",
              cell_no: "E13",
              total: false,
              name:
                "Out of Pockets expenditure on Continuing Professional Development Specialist Medical Practitioner"
            },
            {
              deuid: "BMJGeU5QjPU",
              cocuid: "VtVkbvygJnm",
              cell_no: "F13",
              total: false,
              name:
                "Official Development Assistanc expenditure on Continuing Professional Development Specialist Medical Practitioner"
            },
            {
              deuid: "hUqp2FZFNGA",
              cocuid: "VtVkbvygJnm",
              cell_no: "G13",
              total: false,
              name:
                "Others expenditure on Continuing Professional Development Specialist Medical Practitioner"
            },
            {
              deuid: "k31vRXPe1UA",
              cocuid: "fGOgbIqsxDn",
              cell_no: "D14",
              total: false,
              name:
                "Public expenditure on Continuing Professional Development Nursing Professional"
            },
            {
              deuid: "go9xficYy4f",
              cocuid: "fGOgbIqsxDn",
              cell_no: "E14",
              total: false,
              name:
                "Out of Pockets expenditure on Continuing Professional Development Nursing Professional"
            },
            {
              deuid: "BMJGeU5QjPU",
              cocuid: "fGOgbIqsxDn",
              cell_no: "F14",
              total: false,
              name:
                "Official Development Assistanc expenditure on Continuing Professional Development Nursing Professional"
            },
            {
              deuid: "hUqp2FZFNGA",
              cocuid: "fGOgbIqsxDn",
              cell_no: "G14",
              total: false,
              name:
                "Others expenditure on Continuing Professional Development Nursing Professional"
            },
            {
              deuid: "k31vRXPe1UA",
              cocuid: "MPzyVWiSFF2",
              cell_no: "D15",
              total: false,
              name:
                "Public expenditure on Continuing Professional Development Midwifery Professional"
            },
            {
              deuid: "go9xficYy4f",
              cocuid: "MPzyVWiSFF2",
              cell_no: "E15",
              total: false,
              name:
                "Out of Pockets expenditure on Continuing Professional Development Midwifery Professional"
            },
            {
              deuid: "BMJGeU5QjPU",
              cocuid: "MPzyVWiSFF2",
              cell_no: "F15",
              total: false,
              name:
                "Official Development Assistanc expenditure on Continuing Professional Development Midwifery Professional"
            },
            {
              deuid: "hUqp2FZFNGA",
              cocuid: "MPzyVWiSFF2",
              cell_no: "G15",
              total: false,
              name:
                "Others expenditure on Continuing Professional Development Midwifery Professional"
            },
            {
              deuid: "k31vRXPe1UA",
              cocuid: "ALBRKpJsddQ",
              cell_no: "D16",
              total: false,
              name:
                "Public expenditure on Continuing Professional Development Dentist"
            },
            {
              deuid: "go9xficYy4f",
              cocuid: "ALBRKpJsddQ",
              cell_no: "E16",
              total: false,
              name:
                "Out of Pockets expenditure on Continuing Professional Development Dentist"
            },
            {
              deuid: "BMJGeU5QjPU",
              cocuid: "ALBRKpJsddQ",
              cell_no: "F16",
              total: false,
              name:
                "Official Development Assistanc expenditure on Continuing Professional Development Dentist"
            },
            {
              deuid: "hUqp2FZFNGA",
              cocuid: "ALBRKpJsddQ",
              cell_no: "G16",
              total: false,
              name:
                "Others expenditure on Continuing Professional Development Dentist"
            },
            {
              deuid: "k31vRXPe1UA",
              cocuid: "iWRW6jXAzvP",
              cell_no: "D17",
              total: false,
              name:
                "Public expenditure on Continuing Professional Development Pharmacist"
            },
            {
              deuid: "go9xficYy4f",
              cocuid: "iWRW6jXAzvP",
              cell_no: "E17",
              total: false,
              name:
                "Out of Pockets expenditure on Continuing Professional Development Pharmacist"
            },
            {
              deuid: "BMJGeU5QjPU",
              cocuid: "iWRW6jXAzvP",
              cell_no: "F17",
              total: false,
              name:
                "Official Development Assistanc expenditure on Continuing Professional Development Pharmacist"
            },
            {
              deuid: "hUqp2FZFNGA",
              cocuid: "iWRW6jXAzvP",
              cell_no: "G17",
              total: false,
              name:
                "Others expenditure on Continuing Professional Development Pharmacist"
            }
          ]
        }
      ]
    },
    {
      name: "Module 5 Template",
      file: "NHWA_Module_5.xlsx",
      sheets: [
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 1,
          sheet_name: "Entry into Labour Market",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "X2",
          year_cell: "K4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "P9FK7e2Ngsz",
              cocuid: "aBpbcEgtzgw",
              cell_no: "D9",
              total: false,
              name:
                "Health workforce Started practicing within one year of graduation Medical Doctors"
            },
            {
              deuid: "qNRERx0Icjw",
              cocuid: "aBpbcEgtzgw",
              cell_no: "E9",
              total: false,
              name:
                "Male Health workforce Started practicing within one year of graduation Medical Doctors"
            },
            {
              deuid: "SSzpjcForGt",
              cocuid: "aBpbcEgtzgw",
              cell_no: "F9",
              total: false,
              name:
                "Female Health workforce Started practicing within one year of graduation Medical Doctors"
            },
            {
              deuid: "DwYaOZuilM8",
              cocuid: "aBpbcEgtzgw",
              cell_no: "G9",
              total: false,
              name:
                "Newly active domestic trained Health Workforce Medical Doctors"
            },
            {
              deuid: "gvkPV8aqP39",
              cocuid: "aBpbcEgtzgw",
              cell_no: "H9",
              total: false,
              name:
                "Male newly active domestic trained Health Workforce Medical Doctors"
            },
            {
              deuid: "sF1LtVEqk6Y",
              cocuid: "aBpbcEgtzgw",
              cell_no: "I9",
              total: false,
              name:
                "Female newly active domestic trained Health Workforce Medical Doctors"
            },
            {
              deuid: "OI5vu4jG4Rf",
              cocuid: "aBpbcEgtzgw",
              cell_no: "J9",
              total: false,
              name:
                "Newly active foreign trained Health Workforce Medical Doctors"
            },
            {
              deuid: "h1S7GCkmvVn",
              cocuid: "aBpbcEgtzgw",
              cell_no: "K9",
              total: false,
              name:
                "Male newly active foreign trained Health Workforce Medical Doctors"
            },
            {
              deuid: "ftfTDf31OnN",
              cocuid: "aBpbcEgtzgw",
              cell_no: "L9",
              total: false,
              name:
                "Female newly active foreign trained Health Workforce Medical Doctors"
            },
            {
              deuid: "P9FK7e2Ngsz",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "D10",
              total: false,
              name:
                "Health workforce Started practicing within one year of graduation Generalist Medical Practitioner"
            },
            {
              deuid: "qNRERx0Icjw",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "E10",
              total: false,
              name:
                "Male Health workforce Started practicing within one year of graduation Generalist Medical Practitioner"
            },
            {
              deuid: "SSzpjcForGt",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "F10",
              total: false,
              name:
                "Female Health workforce Started practicing within one year of graduation Generalist Medical Practitioner"
            },
            {
              deuid: "DwYaOZuilM8",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "G10",
              total: false,
              name:
                "Newly active domestic trained Health Workforce Generalist Medical Practitioner"
            },
            {
              deuid: "gvkPV8aqP39",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "H10",
              total: false,
              name:
                "Male newly active domestic trained Health Workforce Generalist Medical Practitioner"
            },
            {
              deuid: "sF1LtVEqk6Y",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "I10",
              total: false,
              name:
                "Female newly active domestic trained Health Workforce Generalist Medical Practitioner"
            },
            {
              deuid: "OI5vu4jG4Rf",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "J10",
              total: false,
              name:
                "Newly active foreign trained Health Workforce Generalist Medical Practitioner"
            },
            {
              deuid: "h1S7GCkmvVn",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "K10",
              total: false,
              name:
                "Male newly active foreign trained Health Workforce Generalist Medical Practitioner"
            },
            {
              deuid: "ftfTDf31OnN",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "L10",
              total: false,
              name:
                "Female newly active foreign trained Health Workforce Generalist Medical Practitioner"
            },
            {
              deuid: "P9FK7e2Ngsz",
              cocuid: "VtVkbvygJnm",
              cell_no: "D11",
              total: false,
              name:
                "Health workforce Started practicing within one year of graduation Specialist Medical Practitioner"
            },
            {
              deuid: "qNRERx0Icjw",
              cocuid: "VtVkbvygJnm",
              cell_no: "E11",
              total: false,
              name:
                "Male Health workforce Started practicing within one year of graduation Specialist Medical Practitioner"
            },
            {
              deuid: "SSzpjcForGt",
              cocuid: "VtVkbvygJnm",
              cell_no: "F11",
              total: false,
              name:
                "Female Health workforce Started practicing within one year of graduation Specialist Medical Practitioner"
            },
            {
              deuid: "DwYaOZuilM8",
              cocuid: "VtVkbvygJnm",
              cell_no: "G11",
              total: false,
              name:
                "Newly active domestic trained Health Workforce Specialist Medical Practitioner"
            },
            {
              deuid: "gvkPV8aqP39",
              cocuid: "VtVkbvygJnm",
              cell_no: "H11",
              total: false,
              name:
                "Male newly active domestic trained Health Workforce Specialist Medical Practitioner"
            },
            {
              deuid: "sF1LtVEqk6Y",
              cocuid: "VtVkbvygJnm",
              cell_no: "I11",
              total: false,
              name:
                "Female newly active domestic trained Health Workforce Specialist Medical Practitioner"
            },
            {
              deuid: "OI5vu4jG4Rf",
              cocuid: "VtVkbvygJnm",
              cell_no: "J11",
              total: false,
              name:
                "Newly active foreign trained Health Workforce Specialist Medical Practitioner"
            },
            {
              deuid: "h1S7GCkmvVn",
              cocuid: "VtVkbvygJnm",
              cell_no: "K11",
              total: false,
              name:
                "Male newly active foreign trained Health Workforce Specialist Medical Practitioner"
            },
            {
              deuid: "ftfTDf31OnN",
              cocuid: "VtVkbvygJnm",
              cell_no: "L11",
              total: false,
              name:
                "Female newly active foreign trained Health Workforce Specialist Medical Practitioner"
            },
            {
              deuid: "P9FK7e2Ngsz",
              cocuid: "fGOgbIqsxDn",
              cell_no: "D12",
              total: false,
              name:
                "Health workforce Started practicing within one year of graduation Nursing Professional"
            },
            {
              deuid: "qNRERx0Icjw",
              cocuid: "fGOgbIqsxDn",
              cell_no: "E12",
              total: false,
              name:
                "Male Health workforce Started practicing within one year of graduation Nursing Professional"
            },
            {
              deuid: "SSzpjcForGt",
              cocuid: "fGOgbIqsxDn",
              cell_no: "F12",
              total: false,
              name:
                "Female Health workforce Started practicing within one year of graduation Nursing Professional"
            },
            {
              deuid: "DwYaOZuilM8",
              cocuid: "fGOgbIqsxDn",
              cell_no: "G12",
              total: false,
              name:
                "Newly active domestic trained Health Workforce Nursing Professional"
            },
            {
              deuid: "gvkPV8aqP39",
              cocuid: "fGOgbIqsxDn",
              cell_no: "H12",
              total: false,
              name:
                "Male newly active domestic trained Health Workforce Nursing Professional"
            },
            {
              deuid: "sF1LtVEqk6Y",
              cocuid: "fGOgbIqsxDn",
              cell_no: "I12",
              total: false,
              name:
                "Female newly active domestic trained Health Workforce Nursing Professional"
            },
            {
              deuid: "OI5vu4jG4Rf",
              cocuid: "fGOgbIqsxDn",
              cell_no: "J12",
              total: false,
              name:
                "Newly active foreign trained Health Workforce Nursing Professional"
            },
            {
              deuid: "h1S7GCkmvVn",
              cocuid: "fGOgbIqsxDn",
              cell_no: "K12",
              total: false,
              name:
                "Male newly active foreign trained Health Workforce Nursing Professional"
            },
            {
              deuid: "ftfTDf31OnN",
              cocuid: "fGOgbIqsxDn",
              cell_no: "L12",
              total: false,
              name:
                "Female newly active foreign trained Health Workforce Nursing Professional"
            },
            {
              deuid: "P9FK7e2Ngsz",
              cocuid: "MPzyVWiSFF2",
              cell_no: "D13",
              total: false,
              name:
                "Health workforce Started practicing within one year of graduation Midwifery Professional"
            },
            {
              deuid: "qNRERx0Icjw",
              cocuid: "MPzyVWiSFF2",
              cell_no: "E13",
              total: false,
              name:
                "Male Health workforce Started practicing within one year of graduation Midwifery Professional"
            },
            {
              deuid: "SSzpjcForGt",
              cocuid: "MPzyVWiSFF2",
              cell_no: "F13",
              total: false,
              name:
                "Female Health workforce Started practicing within one year of graduation Midwifery Professional"
            },
            {
              deuid: "DwYaOZuilM8",
              cocuid: "MPzyVWiSFF2",
              cell_no: "G13",
              total: false,
              name:
                "Newly active domestic trained Health Workforce Midwifery Professional"
            },
            {
              deuid: "gvkPV8aqP39",
              cocuid: "MPzyVWiSFF2",
              cell_no: "H13",
              total: false,
              name:
                "Male newly active domestic trained Health Workforce Midwifery Professional"
            },
            {
              deuid: "sF1LtVEqk6Y",
              cocuid: "MPzyVWiSFF2",
              cell_no: "I13",
              total: false,
              name:
                "Female newly active domestic trained Health Workforce Midwifery Professional"
            },
            {
              deuid: "OI5vu4jG4Rf",
              cocuid: "MPzyVWiSFF2",
              cell_no: "J13",
              total: false,
              name:
                "Newly active foreign trained Health Workforce Midwifery Professional"
            },
            {
              deuid: "h1S7GCkmvVn",
              cocuid: "MPzyVWiSFF2",
              cell_no: "K13",
              total: false,
              name:
                "Male newly active foreign trained Health Workforce Midwifery Professional"
            },
            {
              deuid: "ftfTDf31OnN",
              cocuid: "MPzyVWiSFF2",
              cell_no: "L13",
              total: false,
              name:
                "Female newly active foreign trained Health Workforce Midwifery Professional"
            },
            {
              deuid: "P9FK7e2Ngsz",
              cocuid: "ALBRKpJsddQ",
              cell_no: "D14",
              total: false,
              name:
                "Health workforce Started practicing within one year of graduation Dentist"
            },
            {
              deuid: "qNRERx0Icjw",
              cocuid: "ALBRKpJsddQ",
              cell_no: "E14",
              total: false,
              name:
                "Male Health workforce Started practicing within one year of graduation Dentist"
            },
            {
              deuid: "SSzpjcForGt",
              cocuid: "ALBRKpJsddQ",
              cell_no: "F14",
              total: false,
              name:
                "Female Health workforce Started practicing within one year of graduation Dentist"
            },
            {
              deuid: "DwYaOZuilM8",
              cocuid: "ALBRKpJsddQ",
              cell_no: "G14",
              total: false,
              name: "Newly active domestic trained Health Workforce Dentist"
            },
            {
              deuid: "gvkPV8aqP39",
              cocuid: "ALBRKpJsddQ",
              cell_no: "H14",
              total: false,
              name:
                "Male newly active domestic trained Health Workforce Dentist"
            },
            {
              deuid: "sF1LtVEqk6Y",
              cocuid: "ALBRKpJsddQ",
              cell_no: "I14",
              total: false,
              name:
                "Female newly active domestic trained Health Workforce Dentist"
            },
            {
              deuid: "OI5vu4jG4Rf",
              cocuid: "ALBRKpJsddQ",
              cell_no: "J14",
              total: false,
              name: "Newly active foreign trained Health Workforce Dentist"
            },
            {
              deuid: "h1S7GCkmvVn",
              cocuid: "ALBRKpJsddQ",
              cell_no: "K14",
              total: false,
              name: "Male newly active foreign trained Health Workforce Dentist"
            },
            {
              deuid: "ftfTDf31OnN",
              cocuid: "ALBRKpJsddQ",
              cell_no: "L14",
              total: false,
              name:
                "Female newly active foreign trained Health Workforce Dentist"
            },
            {
              deuid: "P9FK7e2Ngsz",
              cocuid: "iWRW6jXAzvP",
              cell_no: "D15",
              total: false,
              name:
                "Health workforce Started practicing within one year of graduation Pharmacist"
            },
            {
              deuid: "qNRERx0Icjw",
              cocuid: "iWRW6jXAzvP",
              cell_no: "E15",
              total: false,
              name:
                "Male Health workforce Started practicing within one year of graduation Pharmacist"
            },
            {
              deuid: "SSzpjcForGt",
              cocuid: "iWRW6jXAzvP",
              cell_no: "F15",
              total: false,
              name:
                "Female Health workforce Started practicing within one year of graduation Pharmacist"
            },
            {
              deuid: "DwYaOZuilM8",
              cocuid: "iWRW6jXAzvP",
              cell_no: "G15",
              total: false,
              name: "Newly active domestic trained Health Workforce Pharmacist"
            },
            {
              deuid: "gvkPV8aqP39",
              cocuid: "iWRW6jXAzvP",
              cell_no: "H15",
              total: false,
              name:
                "Male newly active domestic trained Health Workforce Pharmacist"
            },
            {
              deuid: "sF1LtVEqk6Y",
              cocuid: "iWRW6jXAzvP",
              cell_no: "I15",
              total: false,
              name:
                "Female newly active domestic trained Health Workforce Pharmacist"
            },
            {
              deuid: "OI5vu4jG4Rf",
              cocuid: "iWRW6jXAzvP",
              cell_no: "J15",
              total: false,
              name: "Newly active foreign trained Health Workforce Pharmacist"
            },
            {
              deuid: "h1S7GCkmvVn",
              cocuid: "iWRW6jXAzvP",
              cell_no: "K15",
              total: false,
              name:
                "Male newly active foreign trained Health Workforce Pharmacist"
            },
            {
              deuid: "ftfTDf31OnN",
              cocuid: "iWRW6jXAzvP",
              cell_no: "L15",
              total: false,
              name:
                "Female newly active foreign trained Health Workforce Pharmacist"
            }
          ]
        },
        {
          sheet_type: "AGGREGATE_STATIC",
          sheet_no: 2,
          sheet_name: "Exit from Labour Market",
          orgUnitIdScheme: "UID",
          dataElementIdScheme: "UID",
          idScheme: "UID",
          oucode_cell: "O2",
          year_cell: "J4",
          last_data_column: "ZZ",
          agg_des: [
            {
              deuid: "sdNHn8qmokO",
              cocuid: "aBpbcEgtzgw",
              cell_no: "D9",
              total: false,
              name: "Health workforce currently unemployed Medical Doctors"
            },
            {
              deuid: "Xr81a9iOAyC",
              cocuid: "aBpbcEgtzgw",
              cell_no: "E9",
              total: false,
              name: "Male Health workforce currently unemployed Medical Doctors"
            },
            {
              deuid: "kcoQHDRTi4E",
              cocuid: "aBpbcEgtzgw",
              cell_no: "F9",
              total: false,
              name:
                "Female Health workforce currently unemployed Medical Doctors"
            },
            {
              deuid: "aeGGK8bRvmr",
              cocuid: "aBpbcEgtzgw",
              cell_no: "G9",
              total: false,
              name: "Vacancy rate for HWF Medical Doctors"
            },
            {
              deuid: "BOPZbzxOfSA",
              cocuid: "aBpbcEgtzgw",
              cell_no: "H9",
              total: false,
              name:
                "Health workforce who have voluntary exit from the force Medical Doctors"
            },
            {
              deuid: "qQBFc1FSZBd",
              cocuid: "aBpbcEgtzgw",
              cell_no: "I9",
              total: false,
              name:
                "Male Health workforce who have voluntary exit from the force Medical Doctors"
            },
            {
              deuid: "sw0lh63wqsA",
              cocuid: "aBpbcEgtzgw",
              cell_no: "J9",
              total: false,
              name:
                "Female Health workforce who have voluntary exit from the force Medical Doctors"
            },
            {
              deuid: "NNQYgAf2Cj8",
              cocuid: "aBpbcEgtzgw",
              cell_no: "K9",
              total: false,
              name:
                "Health workforce who have involuntary exit from the force Medical Doctors"
            },
            {
              deuid: "AZqsANkZRnD",
              cocuid: "aBpbcEgtzgw",
              cell_no: "L9",
              total: false,
              name:
                "Male Health workforce who have involuntary exit from the force Medical Doctors"
            },
            {
              deuid: "yazrkuSMGHD",
              cocuid: "aBpbcEgtzgw",
              cell_no: "M9",
              total: false,
              name:
                "Female Health workforce who have involuntary exit from the force Medical Doctors"
            },
            {
              deuid: "sdNHn8qmokO",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "D10",
              total: false,
              name:
                "Health workforce currently unemployed Generalist Medical Practitioner"
            },
            {
              deuid: "Xr81a9iOAyC",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "E10",
              total: false,
              name:
                "Male Health workforce currently unemployed Generalist Medical Practitioner"
            },
            {
              deuid: "kcoQHDRTi4E",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "F10",
              total: false,
              name:
                "Female Health workforce currently unemployed Generalist Medical Practitioner"
            },
            {
              deuid: "aeGGK8bRvmr",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "G10",
              total: false,
              name: "Vacancy rate for HWF Generalist Medical Practitioner"
            },
            {
              deuid: "BOPZbzxOfSA",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "H10",
              total: false,
              name:
                "Health workforce who have voluntary exit from the force Generalist Medical Practitioner"
            },
            {
              deuid: "qQBFc1FSZBd",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "I10",
              total: false,
              name:
                "Male Health workforce who have voluntary exit from the force Generalist Medical Practitioner"
            },
            {
              deuid: "sw0lh63wqsA",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "J10",
              total: false,
              name:
                "Female Health workforce who have voluntary exit from the force Generalist Medical Practitioner"
            },
            {
              deuid: "NNQYgAf2Cj8",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "K10",
              total: false,
              name:
                "Health workforce who have involuntary exit from the force Generalist Medical Practitioner"
            },
            {
              deuid: "AZqsANkZRnD",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "L10",
              total: false,
              name:
                "Male Health workforce who have involuntary exit from the force Generalist Medical Practitioner"
            },
            {
              deuid: "yazrkuSMGHD",
              cocuid: "LHbCtHlZr3Y",
              cell_no: "M10",
              total: false,
              name:
                "Female Health workforce who have involuntary exit from the force Generalist Medical Practitioner"
            },
            {
              deuid: "sdNHn8qmokO",
              cocuid: "VtVkbvygJnm",
              cell_no: "D11",
              total: false,
              name:
                "Health workforce currently unemployed Specialist Medical Practitioner"
            },
            {
              deuid: "Xr81a9iOAyC",
              cocuid: "VtVkbvygJnm",
              cell_no: "E11",
              total: false,
              name:
                "Male Health workforce currently unemployed Specialist Medical Practitioner"
            },
            {
              deuid: "kcoQHDRTi4E",
              cocuid: "VtVkbvygJnm",
              cell_no: "F11",
              total: false,
              name:
                "Female Health workforce currently unemployed Specialist Medical Practitioner"
            },
            {
              deuid: "aeGGK8bRvmr",
              cocuid: "VtVkbvygJnm",
              cell_no: "G11",
              total: false,
              name: "Vacancy rate for HWF Specialist Medical Practitioner"
            },
            {
              deuid: "BOPZbzxOfSA",
              cocuid: "VtVkbvygJnm",
              cell_no: "H11",
              total: false,
              name:
                "Health workforce who have voluntary exit from the force Specialist Medical Practitioner"
            },
            {
              deuid: "qQBFc1FSZBd",
              cocuid: "VtVkbvygJnm",
              cell_no: "I11",
              total: false,
              name:
                "Male Health workforce who have voluntary exit from the force Specialist Medical Practitioner"
            },
            {
              deuid: "sw0lh63wqsA",
              cocuid: "VtVkbvygJnm",
              cell_no: "J11",
              total: false,
              name:
                "Female Health workforce who have voluntary exit from the force Specialist Medical Practitioner"
            },
            {
              deuid: "NNQYgAf2Cj8",
              cocuid: "VtVkbvygJnm",
              cell_no: "K11",
              total: false,
              name:
                "Health workforce who have involuntary exit from the force Specialist Medical Practitioner"
            },
            {
              deuid: "AZqsANkZRnD",
              cocuid: "VtVkbvygJnm",
              cell_no: "L11",
              total: false,
              name:
                "Male Health workforce who have involuntary exit from the force Specialist Medical Practitioner"
            },
            {
              deuid: "yazrkuSMGHD",
              cocuid: "VtVkbvygJnm",
              cell_no: "M11",
              total: false,
              name:
                "Female Health workforce who have involuntary exit from the force Specialist Medical Practitioner"
            },
            {
              deuid: "sdNHn8qmokO",
              cocuid: "fGOgbIqsxDn",
              cell_no: "D12",
              total: false,
              name: "Health workforce currently unemployed Nursing Professional"
            },
            {
              deuid: "Xr81a9iOAyC",
              cocuid: "fGOgbIqsxDn",
              cell_no: "E12",
              total: false,
              name:
                "Male Health workforce currently unemployed Nursing Professional"
            },
            {
              deuid: "kcoQHDRTi4E",
              cocuid: "fGOgbIqsxDn",
              cell_no: "F12",
              total: false,
              name:
                "Female Health workforce currently unemployed Nursing Professional"
            },
            {
              deuid: "aeGGK8bRvmr",
              cocuid: "fGOgbIqsxDn",
              cell_no: "G12",
              total: false,
              name: "Vacancy rate for HWF Nursing Professional"
            },
            {
              deuid: "BOPZbzxOfSA",
              cocuid: "fGOgbIqsxDn",
              cell_no: "H12",
              total: false,
              name:
                "Health workforce who have voluntary exit from the force Nursing Professional"
            },
            {
              deuid: "qQBFc1FSZBd",
              cocuid: "fGOgbIqsxDn",
              cell_no: "I12",
              total: false,
              name:
                "Male Health workforce who have voluntary exit from the force Nursing Professional"
            },
            {
              deuid: "sw0lh63wqsA",
              cocuid: "fGOgbIqsxDn",
              cell_no: "J12",
              total: false,
              name:
                "Female Health workforce who have voluntary exit from the force Nursing Professional"
            },
            {
              deuid: "NNQYgAf2Cj8",
              cocuid: "fGOgbIqsxDn",
              cell_no: "K12",
              total: false,
              name:
                "Health workforce who have involuntary exit from the force Nursing Professional"
            },
            {
              deuid: "AZqsANkZRnD",
              cocuid: "fGOgbIqsxDn",
              cell_no: "L12",
              total: false,
              name:
                "Male Health workforce who have involuntary exit from the force Nursing Professional"
            },
            {
              deuid: "yazrkuSMGHD",
              cocuid: "fGOgbIqsxDn",
              cell_no: "M12",
              total: false,
              name:
                "Female Health workforce who have involuntary exit from the force Nursing Professional"
            },
            {
              deuid: "sdNHn8qmokO",
              cocuid: "MPzyVWiSFF2",
              cell_no: "D13",
              total: false,
              name:
                "Health workforce currently unemployed Midwifery Professional"
            },
            {
              deuid: "Xr81a9iOAyC",
              cocuid: "MPzyVWiSFF2",
              cell_no: "E13",
              total: false,
              name:
                "Male Health workforce currently unemployed Midwifery Professional"
            },
            {
              deuid: "kcoQHDRTi4E",
              cocuid: "MPzyVWiSFF2",
              cell_no: "F13",
              total: false,
              name:
                "Female Health workforce currently unemployed Midwifery Professional"
            },
            {
              deuid: "aeGGK8bRvmr",
              cocuid: "MPzyVWiSFF2",
              cell_no: "G13",
              total: false,
              name: "Vacancy rate for HWF Midwifery Professional"
            },
            {
              deuid: "BOPZbzxOfSA",
              cocuid: "MPzyVWiSFF2",
              cell_no: "H13",
              total: false,
              name:
                "Health workforce who have voluntary exit from the force Midwifery Professional"
            },
            {
              deuid: "qQBFc1FSZBd",
              cocuid: "MPzyVWiSFF2",
              cell_no: "I13",
              total: false,
              name:
                "Male Health workforce who have voluntary exit from the force Midwifery Professional"
            },
            {
              deuid: "sw0lh63wqsA",
              cocuid: "MPzyVWiSFF2",
              cell_no: "J13",
              total: false,
              name:
                "Female Health workforce who have voluntary exit from the force Midwifery Professional"
            },
            {
              deuid: "NNQYgAf2Cj8",
              cocuid: "MPzyVWiSFF2",
              cell_no: "K13",
              total: false,
              name:
                "Health workforce who have involuntary exit from the force Midwifery Professional"
            },
            {
              deuid: "AZqsANkZRnD",
              cocuid: "MPzyVWiSFF2",
              cell_no: "L13",
              total: false,
              name:
                "Male Health workforce who have involuntary exit from the force Midwifery Professional"
            },
            {
              deuid: "yazrkuSMGHD",
              cocuid: "MPzyVWiSFF2",
              cell_no: "M13",
              total: false,
              name:
                "Female Health workforce who have involuntary exit from the force Midwifery Professional"
            },
            {
              deuid: "sdNHn8qmokO",
              cocuid: "ALBRKpJsddQ",
              cell_no: "D14",
              total: false,
              name: "Health workforce currently unemployed Dentist"
            },
            {
              deuid: "Xr81a9iOAyC",
              cocuid: "ALBRKpJsddQ",
              cell_no: "E14",
              total: false,
              name: "Male Health workforce currently unemployed Dentist"
            },
            {
              deuid: "kcoQHDRTi4E",
              cocuid: "ALBRKpJsddQ",
              cell_no: "F14",
              total: false,
              name: "Female Health workforce currently unemployed Dentist"
            },
            {
              deuid: "aeGGK8bRvmr",
              cocuid: "ALBRKpJsddQ",
              cell_no: "G14",
              total: false,
              name: "Vacancy rate for HWF Dentist"
            },
            {
              deuid: "BOPZbzxOfSA",
              cocuid: "ALBRKpJsddQ",
              cell_no: "H14",
              total: false,
              name:
                "Health workforce who have voluntary exit from the force Dentist"
            },
            {
              deuid: "qQBFc1FSZBd",
              cocuid: "ALBRKpJsddQ",
              cell_no: "I14",
              total: false,
              name:
                "Male Health workforce who have voluntary exit from the force Dentist"
            },
            {
              deuid: "sw0lh63wqsA",
              cocuid: "ALBRKpJsddQ",
              cell_no: "J14",
              total: false,
              name:
                "Female Health workforce who have voluntary exit from the force Dentist"
            },
            {
              deuid: "NNQYgAf2Cj8",
              cocuid: "ALBRKpJsddQ",
              cell_no: "K14",
              total: false,
              name:
                "Health workforce who have involuntary exit from the force Dentist"
            },
            {
              deuid: "AZqsANkZRnD",
              cocuid: "ALBRKpJsddQ",
              cell_no: "L14",
              total: false,
              name:
                "Male Health workforce who have involuntary exit from the force Dentist"
            },
            {
              deuid: "yazrkuSMGHD",
              cocuid: "ALBRKpJsddQ",
              cell_no: "M14",
              total: false,
              name:
                "Female Health workforce who have involuntary exit from the force Dentist"
            },
            {
              deuid: "sdNHn8qmokO",
              cocuid: "iWRW6jXAzvP",
              cell_no: "D15",
              total: false,
              name: "Health workforce currently unemployed Pharmacist"
            },
            {
              deuid: "Xr81a9iOAyC",
              cocuid: "iWRW6jXAzvP",
              cell_no: "E15",
              total: false,
              name: "Male Health workforce currently unemployed Pharmacist"
            },
            {
              deuid: "kcoQHDRTi4E",
              cocuid: "iWRW6jXAzvP",
              cell_no: "F15",
              total: false,
              name: "Female Health workforce currently unemployed Pharmacist"
            },
            {
              deuid: "aeGGK8bRvmr",
              cocuid: "iWRW6jXAzvP",
              cell_no: "G15",
              total: false,
              name: "Vacancy rate for HWF Pharmacist"
            },
            {
              deuid: "BOPZbzxOfSA",
              cocuid: "iWRW6jXAzvP",
              cell_no: "H15",
              total: false,
              name:
                "Health workforce who have voluntary exit from the force Pharmacist"
            },
            {
              deuid: "qQBFc1FSZBd",
              cocuid: "iWRW6jXAzvP",
              cell_no: "I15",
              total: false,
              name:
                "Male Health workforce who have voluntary exit from the force Pharmacist"
            },
            {
              deuid: "sw0lh63wqsA",
              cocuid: "iWRW6jXAzvP",
              cell_no: "J15",
              total: false,
              name:
                "Female Health workforce who have voluntary exit from the force Pharmacist"
            },
            {
              deuid: "NNQYgAf2Cj8",
              cocuid: "iWRW6jXAzvP",
              cell_no: "K15",
              total: false,
              name:
                "Health workforce who have involuntary exit from the force Pharmacist"
            },
            {
              deuid: "AZqsANkZRnD",
              cocuid: "iWRW6jXAzvP",
              cell_no: "L15",
              total: false,
              name:
                "Male Health workforce who have involuntary exit from the force Pharmacist"
            },
            {
              deuid: "yazrkuSMGHD",
              cocuid: "iWRW6jXAzvP",
              cell_no: "M15",
              total: false,
              name:
                "Female Health workforce who have involuntary exit from the force Pharmacist"
            }
          ]
        }
      ]
    },
    {
      "name": "Module 7 Template",
      "file": "NHWA_Module_7.xlsx",
      "sheets": [
          {
              "sheet_type": "AGGREGATE_STATIC",
              "sheet_no": 1,
              "sheet_name": "Expenditure",
              "orgUnitIdScheme": "UID",
              "dataElementIdScheme": "UID",
              "idScheme": "UID",
              "oucode_cell": "V2",
              "year_cell": "I4",
              "last_data_column": "ZZ",
              "agg_des": [
                  {
                      "deuid": "Wgfv9IaDiWM",
                      "cocuid": "Xr12mI7VPn3",
                      "cell_no": "D8",
                      "total": false,
                      "name": "Financial income received from official development assistance and allocated to HWF default"
                  },
                  {
                      "deuid": "gNDFctqpNyv",
                      "cocuid": "IMqululFzhP",
                      "cell_no": "D12",
                      "total": false,
                      "name": "Expenditure on health workforce Public"
                  },
                  {
                      "deuid": "gNDFctqpNyv",
                      "cocuid": "N3nYJ6ScaYx",
                      "cell_no": "E12",
                      "total": false,
                      "name": "Expenditure on health workforce Private not for profit"
                  },
                  {
                      "deuid": "gNDFctqpNyv",
                      "cocuid": "UKbfaRlqkpY",
                      "cell_no": "F12",
                      "total": false,
                      "name": "Expenditure on health workforce Private for profit"
                  },
                  {
                      "deuid": "xWfKWoc4ggg",
                      "cocuid": "cFkpPfqFrJW",
                      "cell_no": "D16",
                      "total": false,
                      "name": "Public expenditure on health workforce Compensation"
                  },
                  {
                      "deuid": "xWfKWoc4ggg",
                      "cocuid": "TQ5H1Za7ZMR",
                      "cell_no": "E16",
                      "total": false,
                      "name": "Public expenditure on health workforce Training"
                  },
                  {
                      "deuid": "xWfKWoc4ggg",
                      "cocuid": "dVpd180cEmo",
                      "cell_no": "F16",
                      "total": false,
                      "name": "Public expenditure on health workforce Others"
                  },
                  {
                      "deuid": "l5RPrypr3Wg",
                      "cocuid": "LfoJLP7BbDk",
                      "cell_no": "D20",
                      "total": false,
                      "name": "Public expenditure on compensation of employees Wages and Salary"
                  },
                  {
                      "deuid": "l5RPrypr3Wg",
                      "cocuid": "hL8lKfXNzln",
                      "cell_no": "E20",
                      "total": false,
                      "name": "Public expenditure on compensation of employees Social contribution"
                  },
                  {
                      "deuid": "l5RPrypr3Wg",
                      "cocuid": "VWIQFya88eZ",
                      "cell_no": "F20",
                      "total": false,
                      "name": "Public expenditure on compensation of employees Others"
                  },
                  {
                      "deuid": "CvaGFNVhuQl",
                      "cocuid": "HQPWV8cT7li",
                      "cell_no": "D24",
                      "total": false,
                      "name": "Total expenditure on compensation of employees Government"
                  },
                  {
                      "deuid": "CvaGFNVhuQl",
                      "cocuid": "FiRcnmXF1Yg",
                      "cell_no": "E24",
                      "total": false,
                      "name": "Total expenditure on compensation of employees Out of Pocket"
                  },
                  {
                      "deuid": "CvaGFNVhuQl",
                      "cocuid": "QKhM7ublqzd",
                      "cell_no": "F24",
                      "total": false,
                      "name": "Total expenditure on compensation of employees Official Development Assistance"
                  },
                  {
                      "deuid": "CvaGFNVhuQl",
                      "cocuid": "txxKPnVUGvV",
                      "cell_no": "G24",
                      "total": false,
                      "name": "Total expenditure on compensation of employees Others"
                  }
              ]
          },
          {
              "sheet_type": "AGGREGATE_STATIC",
              "sheet_no": 2,
              "sheet_name": "Remuneration",
              "orgUnitIdScheme": "UID",
              "dataElementIdScheme": "UID",
              "idScheme": "UID",
              "oucode_cell": "N2",
              "year_cell": "I4",
              "last_data_column": "ZZ",
              "agg_des": [
                  {
                      "deuid": "FVANVRToxVF",
                      "cocuid": "aBpbcEgtzgw",
                      "cell_no": "D10",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Public Facilities Medical Doctors"
                  },
                  {
                      "deuid": "BOsqct4iCpa",
                      "cocuid": "aBpbcEgtzgw",
                      "cell_no": "E10",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private not for profit Facilities Medical Doctors"
                  },
                  {
                      "deuid": "H6pdAoosHWN",
                      "cocuid": "aBpbcEgtzgw",
                      "cell_no": "F10",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private Facilities Medical Doctors"
                  },
                  {
                      "deuid": "oTcSBrUk1hs",
                      "cocuid": "aBpbcEgtzgw",
                      "cell_no": "H10",
                      "total": false,
                      "name": "median earnings of men HWF Medical Doctors"
                  },
                  {
                      "deuid": "kOWad32u5xr",
                      "cocuid": "aBpbcEgtzgw",
                      "cell_no": "I10",
                      "total": false,
                      "name": "median earnings of female HWF Medical Doctors"
                  },
                  {
                      "deuid": "FVANVRToxVF",
                      "cocuid": "LHbCtHlZr3Y",
                      "cell_no": "D11",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Public Facilities Generalist Medical Practitioner"
                  },
                  {
                      "deuid": "BOsqct4iCpa",
                      "cocuid": "LHbCtHlZr3Y",
                      "cell_no": "E11",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private not for profit Facilities Generalist Medical Practitioner"
                  },
                  {
                      "deuid": "H6pdAoosHWN",
                      "cocuid": "LHbCtHlZr3Y",
                      "cell_no": "F11",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private Facilities Generalist Medical Practitioner"
                  },
                  {
                      "deuid": "oTcSBrUk1hs",
                      "cocuid": "LHbCtHlZr3Y",
                      "cell_no": "H11",
                      "total": false,
                      "name": "median earnings of men HWF Generalist Medical Practitioner"
                  },
                  {
                      "deuid": "kOWad32u5xr",
                      "cocuid": "LHbCtHlZr3Y",
                      "cell_no": "I11",
                      "total": false,
                      "name": "median earnings of female HWF Generalist Medical Practitioner"
                  },
                  {
                      "deuid": "FVANVRToxVF",
                      "cocuid": "VtVkbvygJnm",
                      "cell_no": "D12",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Public Facilities Specialist Medical Practitioner"
                  },
                  {
                      "deuid": "BOsqct4iCpa",
                      "cocuid": "VtVkbvygJnm",
                      "cell_no": "E12",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private not for profit Facilities Specialist Medical Practitioner"
                  },
                  {
                      "deuid": "H6pdAoosHWN",
                      "cocuid": "VtVkbvygJnm",
                      "cell_no": "F12",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private Facilities Specialist Medical Practitioner"
                  },
                  {
                      "deuid": "oTcSBrUk1hs",
                      "cocuid": "VtVkbvygJnm",
                      "cell_no": "H12",
                      "total": false,
                      "name": "median earnings of men HWF Specialist Medical Practitioner"
                  },
                  {
                      "deuid": "kOWad32u5xr",
                      "cocuid": "VtVkbvygJnm",
                      "cell_no": "I12",
                      "total": false,
                      "name": "median earnings of female HWF Specialist Medical Practitioner"
                  },
                  {
                      "deuid": "FVANVRToxVF",
                      "cocuid": "fGOgbIqsxDn",
                      "cell_no": "D13",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Public Facilities Nursing Professional"
                  },
                  {
                      "deuid": "BOsqct4iCpa",
                      "cocuid": "fGOgbIqsxDn",
                      "cell_no": "E13",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private not for profit Facilities Nursing Professional"
                  },
                  {
                      "deuid": "H6pdAoosHWN",
                      "cocuid": "fGOgbIqsxDn",
                      "cell_no": "F13",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private Facilities Nursing Professional"
                  },
                  {
                      "deuid": "oTcSBrUk1hs",
                      "cocuid": "fGOgbIqsxDn",
                      "cell_no": "H13",
                      "total": false,
                      "name": "median earnings of men HWF Nursing Professional"
                  },
                  {
                      "deuid": "kOWad32u5xr",
                      "cocuid": "fGOgbIqsxDn",
                      "cell_no": "I13",
                      "total": false,
                      "name": "median earnings of female HWF Nursing Professional"
                  },
                  {
                      "deuid": "FVANVRToxVF",
                      "cocuid": "MPzyVWiSFF2",
                      "cell_no": "D14",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Public Facilities Midwifery Professional"
                  },
                  {
                      "deuid": "BOsqct4iCpa",
                      "cocuid": "MPzyVWiSFF2",
                      "cell_no": "E14",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private not for profit Facilities Midwifery Professional"
                  },
                  {
                      "deuid": "H6pdAoosHWN",
                      "cocuid": "MPzyVWiSFF2",
                      "cell_no": "F14",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private Facilities Midwifery Professional"
                  },
                  {
                      "deuid": "oTcSBrUk1hs",
                      "cocuid": "MPzyVWiSFF2",
                      "cell_no": "H14",
                      "total": false,
                      "name": "median earnings of men HWF Midwifery Professional"
                  },
                  {
                      "deuid": "kOWad32u5xr",
                      "cocuid": "MPzyVWiSFF2",
                      "cell_no": "I14",
                      "total": false,
                      "name": "median earnings of female HWF Midwifery Professional"
                  },
                  {
                      "deuid": "FVANVRToxVF",
                      "cocuid": "ALBRKpJsddQ",
                      "cell_no": "D15",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Public Facilities Dentist"
                  },
                  {
                      "deuid": "BOsqct4iCpa",
                      "cocuid": "ALBRKpJsddQ",
                      "cell_no": "E15",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private not for profit Facilities Dentist"
                  },
                  {
                      "deuid": "H6pdAoosHWN",
                      "cocuid": "ALBRKpJsddQ",
                      "cell_no": "F15",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private Facilities Dentist"
                  },
                  {
                      "deuid": "oTcSBrUk1hs",
                      "cocuid": "ALBRKpJsddQ",
                      "cell_no": "H15",
                      "total": false,
                      "name": "median earnings of men HWF Dentist"
                  },
                  {
                      "deuid": "kOWad32u5xr",
                      "cocuid": "ALBRKpJsddQ",
                      "cell_no": "I15",
                      "total": false,
                      "name": "median earnings of female HWF Dentist"
                  },
                  {
                      "deuid": "FVANVRToxVF",
                      "cocuid": "iWRW6jXAzvP",
                      "cell_no": "D16",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Public Facilities Pharmacist"
                  },
                  {
                      "deuid": "BOsqct4iCpa",
                      "cocuid": "iWRW6jXAzvP",
                      "cell_no": "E16",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private not for profit Facilities Pharmacist"
                  },
                  {
                      "deuid": "H6pdAoosHWN",
                      "cocuid": "iWRW6jXAzvP",
                      "cell_no": "F16",
                      "total": false,
                      "name": "Average of Entry-level wages and salaries excluding Social Contributions in Private Facilities Pharmacist"
                  },
                  {
                      "deuid": "oTcSBrUk1hs",
                      "cocuid": "iWRW6jXAzvP",
                      "cell_no": "H16",
                      "total": false,
                      "name": "median earnings of men HWF Pharmacist"
                  },
                  {
                      "deuid": "kOWad32u5xr",
                      "cocuid": "iWRW6jXAzvP",
                      "cell_no": "I16",
                      "total": false,
                      "name": "median earnings of female HWF Pharmacist"
                  }
              ]
          }
      ]
  }
  ]
};
