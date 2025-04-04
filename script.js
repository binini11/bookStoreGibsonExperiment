// Sample data for grades and books
const grades = Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`);

const booksByGrade = {
  "Grade 1": [
    {
      title: "Grade 1 English",
      image: "bookImage/Grade 1/Grade 1 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/grade%201-english_fetena_net_890a.pdf",
    },
    {
      title: "Grade 1 Amharic",
      image: "bookImage/Grade 1/Grade 1 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/grade%201-amharic_fetena_net_4103.pdf",
    },
    {
      title: "Grade 1 Environmental-Science",
      image: "bookImage/Grade 1/Grade 1 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/Environmental%20Science_fetena_net_32e0.pdf",
    },
    {
      title: "Grade 1 Maths",
      image: "bookImage/Grade 1/Grade 1 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/grade%201-Mathematics_fetena_net_9815.pdf",
    },
    {
      title: "Grade 1 Yeiyta Tbebat",
      image: "bookImage/Grade 1/Grade 1 yekwena tbebat.jpg",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/የክወናና%20የዕይታ%20ጥበባት_fetena_net_704c.pdf",
    },
  ],
  "Grade 2": [
    {
      title: "Grade 2 Amharic",
      image: "bookImage/Grade 2/Grade 2 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-amharic_fetena_net_27f8.pdf",
    },
    {
      title: "Grade 2 English",
      image: "bookImage/Grade 2/Grade 2 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-english_fetena_net_584a.pdf",
    },
    {
      title: "Grade 2 Environmental-Science",
      image: "bookImage/Grade 2/Grade 2 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-environmental%20science_fetena_net_0bb2.pdf",
    },
    {
      title: "Grade 2 Maths",
      image: "bookImage/Grade 2/Grade 2 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-mathematics_fetena_net_0ffa.pdf",
    },
    {
      title: "Grade 2 Yeiyta Tbebat",
      image: "bookImage/Grade 2/Grade 2 Yeiyta Tbebat.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-የክወናና%20የዕይታ%20ጥበባት_fetena_net_ee41.pdf",
    },
  ],
  "Grade 3": [
    {
      title: "Grade 3 Amharic",
      image: "bookImage/Grade 3/Grade 3 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-amharic_fetena_net_4a14.pdf",
    },
    {
      title: "Grade 3 English",
      image: "bookImage/Grade 3/Grade 3 English.png",
      downloadLink: "books/grade 3-amharic_fetena_net_4a14.pdf",
    },
    {
      title: "Grade 3 Environmental-Science",
      image: "bookImage/Grade 3/Grade 3 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-environmental%20science_fetena_net_be67.pdf",
    },
    {
      title: "Grade 3 Maths",
      image: "bookImage/Grade 3/Grade 3 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-mathematics_fetena_net_584c.pdf",
    },
    {
      title: "Grade 3 Yeiyta Tbebat",
      image: "bookImage/Grade 3/Grade 3 Yeiyta Tbebat.png",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-የክወናና%20የዕይታ%20ጥበባት_fetena_net_12c6.pdf",
    },
  ],
  "Grade 4": [
    {
      title: "Grade 4 Amharic",
      image: "bookImage/Grade 4/Grade 4 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-amharic_fetena_net_c3f0.pdf",
    },
    {
      title: "Grade 4 English",
      image: "bookImage/Grade 4/Grade 4 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-english_fetena_net_2d36.pdf",
    },
    {
      title: "Grade 4 Environmental-Science",
      image: "bookImage/Grade 4/Grade 4 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-Environmental%20Science_fetena_net_42ad.pdf",
    },
    {
      title: "Grade 4 Maths",
      image: "bookImage/Grade 4/Grade 4 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-mathematics_fetena_net_b8e6.pdf",
    },
    {
      title: "Grade 4 Yeiyta Tbebat",
      image: "bookImage/Grade 4/Grade 4 Yeiyta Tbebat.png",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-የክወናና%20የዕይታ%20ጥበባት_fetena_net_f675.pdf",
    },
  ],
  "Grade 5": [
    {
      title: "Grade 5 Amharic",
      image: "bookImage/Grade 5/Grade 5 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-amharic_fetena_net_131d.pdf",
    },
    {
      title: "Grade 5 English",
      image: "bookImage/Grade 5/Grade 5 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-english_fetena_net_eef5.pdf",
    },
    {
      title: "Grade 5 Environmental-Science",
      image: "bookImage/Grade 5/Grade 5 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-environmental%20science_fetena_net_15b0.pdf",
    },
    {
      title: "Grade 5 Maths",
      image: "bookImage/Grade 5/Grade 5 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-mathematics_fetena_net_c87f.pdf",
    },
    {
      title: "Grade 5 Yeiyta Tbebat",
      image: "bookImage/Grade 5/Grade 5 Yeiyta Tbebat.png",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-የክወናና%20የዕይታ%20ጥበባት_fetena_net_00cd.pdf",
    },
  ],
  "Grade 6": [
    {
      title: "Grade 6 Amharic",
      image: "bookImage/Grade 6/Grade 6 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-amharic_fetena_net_a9f0.pdf",
    },
    {
      title: "Grade 6 English",
      image: "bookImage/Grade 6/Grade 6 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-english_fetena_net_d4b3.pdf",
    },
    {
      title: "Grade 6 Environmental-Science",
      image: "bookImage/Grade 6/Grade 6 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-environmental%20science_fetena_net_c906.pdf",
    },
    {
      title: "Grade 6 Maths",
      image: "bookImage/Grade 6/Grade 6 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-mathematics_fetena_net_9cbd.pdf",
    },
    {
      title: "Grade 6 Yeiyta Tbebat",
      image: "bookImage/Grade 6/Grade 6 Yeiyta Tbebat.png",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-የክወናና%20የዕይታ%20ጥበባት_fetena_net_dd85.pdf",
    },
  ],
  "Grade 7": [
    {
      title: "Grade 7 Amharic",
      image: "bookImage/Grade 7/Grade 7 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-amharic_fetena_net_ff5d.pdf",
    },
    {
      title: "Grade 7 English",
      image: "bookImage/Grade 7/Grade 7 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-english_fetena_net_0daa.pdf",
    },
    {
      title: "Grade 7 Biology",
      image: "bookImage/Grade 7/Grade 7 Biology.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/biology_fetena_net_59.pdf",
    },
    {
      title: "Grade 7 Maths",
      image: "bookImage/Grade 7/Grade 7 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-mathematics_fetena_net_7350.pdf",
    },
    {
      title: "Grade 7 Performing-Visual-Arts",
      image: "bookImage/Grade 7/Grade 7 Performing-Visual-Arts.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-performing%20and%20visual%20arts%20pva_fetena_net_d7c0.pdf",
    },
    {
      title: "Grade 7 Career & Technical Education",
      image: "bookImage/Grade 7/Grade 7 Career & Technical Education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-career%20and%20technical%20education%20cte_fetena_net_6b46.pdf",
    },
    {
      title: "Grade 7 Chemistry",
      image: "bookImage/Grade 7/Grade 7 Chemistry.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/chemistry_fetena_net_c9.pdf",
    },
    {
      title: "Grade 7 Citizenship-Education",
      image: "bookImage/Grade 7/Grade 7 Citizenship-Education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-citizenship%20education_fetena_net_07b7.pdf",
    },
    {
      title: "Grade 7 General-Science",
      image: "bookImage/Grade 7/Grade 7 General-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-general%20science_fetena_net_ff42.pdf",
    },
    {
      title: "Grade 7 INFORMATION-TECHNOLOGY",
      image: "bookImage/Grade 7/Grade 7 INFORMATION-TECHNOLOGY.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-INFORMATION%20TECHNOLOGY_fetena_net_d101.pdf",
    },
    {
      title: "Grade 7 Physics",
      image: "bookImage/Grade 7/Grade 7 Physics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/physics_fetena_net_fa.pdf",
    },
    {
      title: "Grade 7 Social-Studies",
      image: "bookImage/Grade 7/Grade 7 Social-Studies.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-social%20studies_fetena_net_64c4.pdf",
    },
  ],
  "Grade 8": [
    {
      title: "Grade 8 Amharic",
      image: "bookImage/Grade 8/Grade 8 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/grade%208-amharic_fetena_net_1fc0.pdf",
    },
    {
      title: "Grade 8 English",
      image: "bookImage/Grade 8/Grade 8 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/grade%208-english_fetena_net_9e40.pdf",
    },
    {
      title: "Grade 8 Biology",
      image: "bookImage/Grade 8/Grade 8 Biology.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/chemistry_fetena_net_0b.pdf",
    },
    {
      title: "Grade 8 Maths",
      image: "bookImage/Grade 8/Grade 8 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/grade%208-mathematics_fetena_net_8bd2.pdf",
    },
    {
      title: "Grade 8 Performing-Visual-Arts",
      image: "bookImage/Grade 8/Grade 8 Performing-Visual-Arts.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/grade%208-performing%20and%20visual%20arts%20pva_fetena_net_9aeb.pdf",
    },
    {
      title: "Grade 8 Career & Technical Education",
      image: "bookImage/Grade 8/Grade 8 Career & Technical Education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/grade%208-citizenship%20education_fetena_net_3167.pdf",
    },
    {
      title: "Grade 8 Chemistry",
      image: "bookImage/Grade 8/Grade 8 Chemistry.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/chemistry_fetena_net_0b.pdf",
    },
    {
      title: "Grade 8 Citizenship-Education",
      image: "bookImage/Grade 8/Grade 8 Citizenship-Education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-citizenship%20education_fetena_net_07b7.pdf",
    },
    {
      title: "Grade 8 General-Science",
      image: "bookImage/Grade 8/Grade 8 General-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-general%20science_fetena_net_ff42.pdf",
    },
    {
      title: "Grade 8 INFORMATION-TECHNOLOGY",
      image: "bookImage/Grade 8/Grade 8 INFORMATION-TECHNOLOGY.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/grade%208-Information%20Technology%20IT_fetena_net_af43.pdf",
    },
    {
      title: "Grade 8 Physics",
      image: "bookImage/Grade 8/Grade 8 Physics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/physics_fetena_net_b6.pdf",
    },
    {
      title: "Grade 8 Social-Studies",
      image: "bookImage/Grade 8/Grade 8 Social-Studies.png",
      downloadLink:
        "https://fetena.net/books_asset/books_24/collection/grade%208-social%20studies_fetena_net_1dc2.pdf",
    },
  ],
  "Grade 9": [
    {
      title: "Grade 9 Amharic",
      image: "bookImage/Grade 9/Grade 9 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-amharic_fetena_net_a077.pdf",
    },
    {
      title: "Grade 9 English",
      image: "bookImage/Grade 9/Grade 9 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-english_fetena_net_0daa.pdf",
    },
    {
      title: "Grade 9 Biology",
      image: "bookImage/Grade 9/Grade 9 Biology.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-biology_fetena_net_ffbb.pdf",
    },
    {
      title: "Grade 9 Maths",
      image: "bookImage/Grade 9/Grade 9 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-mathematics_fetena_net_d3e7.pdf",
    },
    {
      title: "Grade 9 health-Physical-education",
      image: "bookImage/Grade 9/Grade 9 health-Physical-education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-health%20and%20physical%20education_fetena_net_767c.pdf",
    },
    {
      title: "Grade 9 Economics",
      image: "bookImage/Grade 9/Grade 9 Economics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-economics_fetena_net_223e.pdf",
    },
    {
      title: "Grade 9 Chemistry",
      image: "bookImage/Grade 9/Grade 9 Chemistry.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-chemistry_fetena_net_7bd1.pdf",
    },
    {
      title: "Grade 9 Citizenship-Education",
      image: "bookImage/Grade 9/Grade 9 Citizenship-Education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-citizenship%20education_fetena_net_3c2e.pdf",
    },
    {
      title: "Grade 9 Geography",
      image: "bookImage/Grade 9/Grade 9 Geography.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-geography_fetena_net_e7de.pdf",
    },
    {
      title: "Grade 9 INFORMATION-TECHNOLOGY",
      image: "bookImage/Grade 9/Grade 9 INFORMATION-TECHNOLOGY.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-ict_fetena_net_408d.pdf",
    },
    {
      title: "Grade 9 Physics",
      image: "bookImage/Grade 9/Grade 9 Physics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-physics_fetena_net_aabb.pdf",
    },
    {
      title: "Grade 9 History",
      image: "bookImage/Grade 9/Grade 9 History.png",
      downloadLink:
        "https://fetena.net/books_asset/books_26/collection/grade%209-history_fetena_net_bd0b.pdf",
    },
  ],
  "Grade 10": [
    {
      title: "Grade 10 Amharic",
      image: "bookImage/Grade 10/Grade 10 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-amharic_fetena_net_1096.pdf",
    },
    {
      title: "Grade 10 English",
      image: "bookImage/Grade 10/Grade 10 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-english_fetena_net_57cc.pdf",
    },
    {
      title: "Grade 10 Biology",
      image: "bookImage/Grade 10/Grade 10 Biology.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-biology_fetena_net_5ecf.pdf",
    },
    {
      title: "Grade 10 Maths",
      image: "bookImage/Grade 10/Grade 10 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-mathematics_fetena_net_6731.pdf",
    },
    {
      title: "Grade 10 health-Physical-education",
      image: "bookImage/Grade 10/Grade 10 health-Physical-education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-health%20and%20physical%20education_fetena_net_94bb.pdf",
    },
    {
      title: "Grade 10 Economics",
      image: "bookImage/Grade 10/Grade 10 Economics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-economics_fetena_net_e38f.pdf",
    },
    {
      title: "Grade 10 Chemistry",
      image: "bookImage/Grade 10/Grade 10 Chemistry.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-chemistry_fetena_net_5f24.pdf",
    },
    {
      title: "Grade 10 Citizenship-Education",
      image: "bookImage/Grade 10/Grade 10 Citizenship-Education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-citizenship%20education_fetena_net_fc96.pdf",
    },
    {
      title: "Grade 10 Geography",
      image: "bookImage/Grade 10/Grade 10 Geography.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-geography_fetena_net_68b5.pdf",
    },
    {
      title: "Grade 10 INFORMATION-TECHNOLOGY",
      image: "bookImage/Grade 10/Grade 10 INFORMATION-TECHNOLOGY.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-ict_fetena_net_c905.pdf",
    },
    {
      title: "Grade 10 Physics",
      image: "bookImage/Grade 10/Grade 10 Physics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-physics_fetena_net_1b5e.pdf",
    },
    {
      title: "Grade 10 History",
      image: "bookImage/Grade 10/Grade 10 History.png",
      downloadLink:
        "https://fetena.net/books_asset/books_27/collection/grade%2010-history_fetena_net_3957.pdf",
    },
  ],

  "Grade 11": [
    {
      title: "Grade 11 Amharic",
      image: "bookImage/Grade 11/Grade 11 Agriculture.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/amharic_fetena_net_e061.pdf",
    },
    {
      title: "Grade 11 English",
      image: "bookImage/Grade 11/Grade 11 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-english_fetena_net_2b7b.pdf",
    },
    {
      title: "Grade 11 Biology",
      image: "bookImage/Grade 11/Grade 11 Biology.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-biology_fetena_net_c646.pdf",
    },
    {
      title: "Grade 11 Maths",
      image: "bookImage/Grade 11/Grade 11 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-mathematics_fetena_net_67b9.pdf",
    },
    {
      title: "Grade 11 General-Business",
      image: "bookImage/Grade 11/Grade 11 General-Business.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/general%20business_fetena_net_e2df.pdf",
    },
    {
      title: "Grade 11 Economics",
      image: "bookImage/Grade 11/Grade 11 Economics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-economics_fetena_net_6f71.pdf",
    },
    {
      title: "Grade 11 Chemistry",
      image: "bookImage/Grade 11/Grade 11 Chemistry.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-chemistry_fetena_net_5883.pdf",
    },
    {
      title: "Grade 11 Civics-Ethical-Education",
      image: "bookImage/Grade 11/Grade 11 Civics-Ethical-Education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/civics%20and%20ethical%20education_fetena_net_4e59.pdf",
    },
    {
      title: "Grade 11 Geography",
      image: "bookImage/Grade 11/Grade 11 Geography.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-geography_fetena_net_34b3.pdf",
    },
    {
      title: "Grade 11 INFORMATION-TECHNOLOGY",
      image: "bookImage/Grade 11/Grade 11 INFORMATION-TECHNOLOGY.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-ict_fetena_net_c954.pdf",
    },
    {
      title: "Grade 11 Physics",
      image: "bookImage/Grade 11/Grade 11 Physics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-physics_fetena_net_e906.pdf",
    },
    {
      title: "Grade 11 History",
      image: "bookImage/Grade 11/Grade 11 History.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-history_fetena_net_2728.pdf",
    },
    {
      title: "Grade 11 Agriculture",
      image: "bookImage/Grade 11/Grade 11 Agriculture.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-agriculture_fetena_net_48cc.pdf",
    },
  ],
  "Grade 12": [
    {
      title: "Grade 12 Amharic",
      image: "bookImage/Grade 12/Grade 12 Agriculture.png",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/amharic_fetena_net_9d86.pdf",
    },
    {
      title: "Grade 12 English",
      image: "bookImage/Grade 12/Grade 12 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/grade%2012-english_fetena_net_a7d0.pdf",
    },
    {
      title: "Grade 11 Biology",
      image: "bookImage/Grade 12/Grade 12 Biology.png",
      downloadLink:
        "https://fetena.net/books_asset/books_28/collection/grade%2011-biology_fetena_net_c646.pdf",
    },
    {
      title: "Grade 12 Maths",
      image: "bookImage/Grade 12/Grade 12 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/grade%2012-mathematics_fetena_net_4853.pdf",
    },
    {
      title: "Grade 12 General-Business",
      image: "bookImage/Grade 12/Grade 12 General-Business.png",
      downloadLink:
        "hhttps://fetena.net/books_asset/books_29/collection/general%20business_fetena_net_e628.pdf",
    },
    {
      title: "Grade 12 Economics",
      image: "bookImage/Grade 12/Grade 12 Economics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/grade%2012-economics_fetena_net_7ff1.pdf",
    },
    {
      title: "Grade 12 Chemistry",
      image: "bookImage/Grade 12/Grade 12 Chemistry.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/grade%2012-chemistry_fetena_net_ef88.pdf",
    },
    {
      title: "Grade 12 Civics-Ethical-Education",
      image: "bookImage/Grade 12/Grade 12 Civics-Ethical-Education.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/civic%20and%20ethical%20education_fetena_net_f58e.pdf",
    },
    {
      title: "Grade 12 Geography",
      image: "bookImage/Grade 12/Grade 12 Geography.png",
      downloadLink:
        "hhttps://fetena.net/books_asset/books_29/collection/grade%2012-geography_fetena_net_6472.pdf",
    },
    {
      title: "Grade 12 INFORMATION-TECHNOLOGY",
      image: "bookImage/Grade 12/Grade 12 INFORMATION-TECHNOLOGY.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/grade%2012-ict_fetena_net_fc95.pdf",
    },
    {
      title: "Grade 12 Physics",
      image: "bookImage/Grade 12/Grade 12 Physics.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/grade%2012-physics_fetena_net_4c93.pdf",
    },
    {
      title: "Grade 12 History",
      image: "bookImage/Grade 12/Grade 12 History.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/grade%2012-history_fetena_net_0ee1.pdf",
    },
    {
      title: "Grade 12 Agriculture",
      image: "bookImage/Grade 12/Grade 12 Agriculture.png",
      downloadLink:
        "https://fetena.net/books_asset/books_29/collection/grade%2012-agriculture_fetena_net_e1e8.pdf",
    },
  ],
};

// ======================
// DATA STRUCTURES
// ======================

// Expanded Model Exams Data
const modelExams = {
  Ministry: {
    Amharic: [
      {
        title: "Grade 8 Amharic Model Exam 2023",
        image: "exams/amharic-grade10.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2023",
        type: "",
      },
      {
        title: "Grade 8 Amharic Model Exam 2024",
        image: "exams/amharic-grade12.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2024",
        type: "",
      },
    ],
    English: [
      {
        title: "Grade 8 English Model Exam 2023",
        image: "exams/english-grade10.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2023",
        type: "",
      },
      {
        title: "Grade 8 English Model Exam 2024",
        image: "exams/english-grade12.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2024",
        type: "",
      },
    ],
    Mathematics: [
      {
        title: "Grade 8 Mathematics Model Exam 2023",
        image: "exams/math-grade9.png",
        downloadLink: "#",
        grade: "Grade 8",
        year: "2023",
        type: "",
      },
      {
        title: "Grade 8 Mathematics Model Exam 2024",
        image: "exams/math-grade11.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2024",
        type: "",
      },
    ],
    "Social Studies": [
      {
        title: "Grade 8 Social Studies Model Exam 2023",
        image: "exams/social-grade8.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2023",
        type: "",
      },
    ],
    "Civics and Ethical Education": [
      {
        title: "Grade 8 Civics Model Exam 2024",
        image: "exams/civics-grade11.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2024",
        type: "",
      },
    ],
  },
  matriculation: {
    Amharic: [
      {
        title: "Grade 8 Amharic Model Exam 2023",
        image: "exams/amharic-grade10.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2023",
        type: "",
      },
      {
        title: "Grade 8 Amharic Model Exam 2024",
        image: "exams/amharic-grade12.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2024",
        type: "",
      },
    ],
    English: [
      {
        title: "Grade 8 English Model Exam 2023",
        image: "exams/english-grade10.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2023",
        type: "",
      },
      {
        title: "Grade 8 English Model Exam 2024",
        image: "exams/english-grade12.png",
        downloadLink: "books/Exams.pdf",
        grade: "Grade 8",
        year: "2024",
        type: "",
      },
    ],
  },
};

// ======================
// DOM ELEMENTS & STATE
// ======================

const pages = {
  home: document.getElementById("grade-selection-page"),
  books: document.getElementById("subject-books-page"),
  exams: document.getElementById("model-exams-page"),
  about: document.getElementById("about-us-page"),
  extreme: document.getElementById("extreme-books-page"),
};

const bookList = document.getElementById("book-list");
const searchBox = document.getElementById("search-bar");
const examSearchBox = document.createElement("input"); // Will be added dynamically

let currentView = {
  type: null, // 'books' or 'exams'
  category: null,
  subject: null,
  items: [],
};

// ======================
// CORE DISPLAY FUNCTIONS
// ======================

function displayGrades() {
  const gradeList = document.getElementById("grade-list");
  gradeList.innerHTML = "";

  grades.forEach((grade) => {
    const gradeCard = document.createElement("div");
    gradeCard.className = "grade-card";
    gradeCard.innerHTML = `
      <i class="fas fa-folder"></i>
      <h2>${grade}</h2>
    `;
    gradeCard.addEventListener("click", () => showBooksForGrade(grade));
    gradeList.appendChild(gradeCard);
  });
}

function showBooksForGrade(grade) {
  currentView = {
    type: "books",
    category: grade,
    subject: null,
    items: booksByGrade[grade] || [],
  };
  showPage("books");
  displayItems(currentView.items);
}

// ======================
// EXAM-SPECIFIC FUNCTIONS
// ======================

function displayExamCategories() {
  const examList = document.getElementById("model-exams-list");
  examList.innerHTML = "";

  for (const category in modelExams) {
    const subjectCount = Object.keys(modelExams[category]).length;
    const examCount = Object.values(modelExams[category]).flat().length;

    const categoryCard = document.createElement("div");
    categoryCard.className = "exam-category-card";
    categoryCard.innerHTML = `
      <i class="fas fa-folder-open"></i>
      <h2>${category}</h2>
      <div class="exam-stats">
        <span>${subjectCount} ${
      subjectCount === 1 ? "Subject" : "Subjects"
    }</span>
        <span>${examCount} ${examCount === 1 ? "Exam" : "Exams"}</span>
      </div>
    `;
    categoryCard.addEventListener("click", () => showExamSubjects(category));
    examList.appendChild(categoryCard);
  }
}

function showExamSubjects(category) {
  const subjectList = document.getElementById("exam-subjects-list");
  subjectList.innerHTML = "";
  document.getElementById("exam-category-title").textContent = category;

  for (const subject in modelExams[category]) {
    const exams = modelExams[category][subject];
    const subjectCard = document.createElement("div");
    subjectCard.className = "exam-subject-card";
    subjectCard.innerHTML = `
      <i class="fas fa-book"></i>
      <h3>${subject}</h3>
      <span>${exams.length} ${exams.length === 1 ? "exam" : "exams"}</span>
    `;
    subjectCard.addEventListener("click", () => {
      currentView = {
        type: "exams",
        category: category,
        subject: subject,
        items: exams,
      };
      showPage("books"); // Use books page but with exam layout
      displayItems(currentView.items);
    });
    subjectList.appendChild(subjectCard);
  }

  document.getElementById("model-exams-categories").style.display = "none";
  document.getElementById("model-exams-subjects").style.display = "block";
}

// ======================
// ITEM DISPLAY FUNCTION
// ======================

function displayItems(items) {
  bookList.innerHTML = "";

  if (items.length === 0) {
    bookList.innerHTML = "<p class='no-results'>No items found.</p>";
    return;
  }

  // Set appropriate title
  const titleElement =
    document.getElementById("exam-subject-title") ||
    document.createElement("h2");
  if (currentView.type === "exams") {
    titleElement.textContent = `${currentView.category} - ${currentView.subject} Exams`;
  } else {
    titleElement.textContent = `${currentView.category} Books`;
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "item-card";

    if (currentView.type === "exams") {
      // Exam Card Layout
      card.innerHTML = `
        <div class="exam-card">
          <div class="exam-header">
            <h3>${item.title}</h3>
            <div class="exam-grade">${item.grade}</div>
          </div>
          <div class="exam-meta">
            <span><i class="fas fa-calendar-alt"></i> ${item.year}</span>
            
            ${
              item.region
                ? `<span><i class="fas fa-map-marker-alt"></i> ${item.region}</span>`
                : ""
            }
          </div>
          
          <a href="${
            item.downloadLink
          }" class="download-button" target="_blank" download>
            <i class="fas fa-download"></i> Download
          </a>
        </div>
      `;
    } else {
      // Book Card Layout
      card.innerHTML = `
        <a href="${
          item.downloadLink
        }" class="book-card" target="_blank" download>
          <div class="book-image-container">
            <img src="${item.image || "default-book.png"}" 
                 alt="${item.title}" 
                 onerror="this.src='default-book.png'">
          </div>
          <div class="book-info">
            <h3>${item.title}</h3>
            <span class="download-label">Download</span>
          </div>
        </a>
      `;
    }
    bookList.appendChild(card);
  });
}

// ======================
// NAVIGATION & PAGE MANAGEMENT
// ======================

function showPage(page) {
  // Hide all pages
  Object.values(pages).forEach((p) => (p.style.display = "none"));

  // Show requested page
  pages[page].style.display = "block";

  // Special cases
  if (page === "home") displayGrades();
  if (page === "exams") {
    document.getElementById("model-exams-categories").style.display = "block";
    document.getElementById("model-exams-subjects").style.display = "none";
    displayExamCategories();
  }
}

function handleBackButton() {
  if (currentView.type === "exams") {
    if (
      document.getElementById("model-exams-subjects").style.display === "block"
    ) {
      showPage("exams");
    } else {
      showPage("home");
    }
  } else {
    showPage("home");
  }
}

// ======================
// EVENT LISTENERS
// ======================

document.addEventListener("DOMContentLoaded", () => {
  displayGrades();

  // Navigation
  document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    showPage("home");
  });

  document.getElementById("about-link").addEventListener("click", (e) => {
    e.preventDefault();
    showPage("about");
  });

  document.getElementById("model-exams-link").addEventListener("click", (e) => {
    e.preventDefault();
    showPage("exams");
  });

  document.getElementById("grade-books-link").addEventListener("click", (e) => {
    e.preventDefault();
    showPage("home");
  });

  // Back buttons
  document
    .getElementById("back-button")
    .addEventListener("click", handleBackButton);
  document
    .getElementById("model-exams-back-button")
    .addEventListener("click", handleBackButton);

  // Search
  searchBox.addEventListener("input", () => {
    const term = searchBox.value.toLowerCase();
    const filtered = allBooks.filter((book) =>
      book.title.toLowerCase().includes(term)
    );
    displayItems(filtered);
  });
});
