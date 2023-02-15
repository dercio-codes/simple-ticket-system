import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import QRCode from "react-qr-code";
import ReactToPdf from "react-to-pdf";
import html2canvas from "html2canvas";

export default function Home() {
  const [value, setValue] = React.useState(
    "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"
  );
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState("");
  const ref = React.createRef();
  const MyQRCode = () => {
    return (
      <QRCode
        value={value || ""}
        style={{ height: "150px", width: "fit-content" }}
      />
    );
  };
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [13, 6],
  };

  const handleDownloadImage = async () => {
    const element = document.getElementById("print"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    console.log(data);
    setImageSrc(data);
    link.href = data;
    link.download = "downloaded-image.jpg";
    setImageLoaded(true);
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <Box sx={{ height: "100vh", background: "#111" }}>
      <input
        value={value}
        onChange={(e) => {
          handleDownloadImage();

          setValue(e.target.value);
        }}
      />
      {value || ""}

      <br />
      <button
        onClick={async () => {
          // toPdf();
          handleDownloadImage();
        }}
      >
        Generate Image
      </button>
      <ReactToPdf targetRef={ref} options={options} filename="ticket-1.pdf">
        {({ toPdf }) => (
          <button
            onClick={async () => {
              toPdf();
              // handleDownloadImage();
            }}
          >
            Generate pdf
          </button>
        )}
      </ReactToPdf>

      <Box
        id={"ticket"}
        ref={ref}
        sx={{
          minHeight: "550px",
          width: "1200px",
          backgroundImage: 'url("/Colored Shapes.svg")',
          backgroundSize: "cover",
          backgroundColor: "white",
          backgroundPosition: "center ",
          display: "flex",
          // alignItems: "center",
          justifyContent: "space-between",
          margin: "32px auto",
        }}
      >
        <Box
          sx={{
            padding: "0 3.5rem ",
            width: "100%",
            borderRight: "1px solid rgba(1,1,1,.1)",
            background: "rgba(255,255,255,.7)",
          }}
        >
          <Box
            id={"ticket"}
            ref={ref}
            sx={{
              height: "150px",
              width: "150px",
              backgroundImage: 'url("/atomus-transparent.png")',
              backgroundSize: "cover",
              backgroundPosition: "center ",
            }}
          />

          <Typography
            sx={{
              color: "#111",
              opacity: "0.9",
              margin: "0 0 8px 0",
              fontWeight: "600",
              fontSize: "32px",
              fontFamily: "'Limelight', cursive",
            }}
          >
            General Access
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", background: "" }}>
            <Typography
              sx={{
                color: "#111",
                opacity: "0.75",
                margin: "12px 12px 0 0",
                fontWeight: "300",
                fontSize: "21px",
                fontFamily: "'Limelight', cursive",
              }}
            >
              {"Event : "}
            </Typography>

            <Typography
              sx={{
                color: "#111",
                opacity: "0.9",
                margin: "12px 12px 0 0",
                fontWeight: "600",
                fontSize: "26px",
                fontFamily: "'Limelight', cursive",
              }}
            >
              Mesmerise
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", background: "" }}>
            <Typography
              sx={{
                color: "#111",
                opacity: "0.75",
                margin: "12px 12px 0 0",
                fontWeight: "300",
                fontSize: "21px",
                fontFamily: "'Limelight', cursive",
              }}
            >
              {"Date : "}
            </Typography>

            <Typography
              sx={{
                color: "#111",
                opacity: "0.9",
                margin: "12px 12px 0 0",
                fontWeight: "600",
                fontSize: "26px",
                fontFamily: "'Limelight', cursive",
              }}
            >
              4th March 2023
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", background: "" }}>
            <Typography
              sx={{
                color: "#111",
                opacity: "0.75",
                margin: "12px 12px 0 0",
                fontWeight: "300",
                fontSize: "21px",
                fontFamily: "'Limelight', cursive",
              }}
            >
              {"Venue : "}
            </Typography>

            <Typography
              sx={{
                color: "#111",
                opacity: "0.9",
                margin: "12px 12px 0 0",
                fontWeight: "600",
                fontSize: "26px",
                fontFamily: "'Limelight', cursive",
              }}
            >
              The Classic Hookah Lounge
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: "100px",
              background: "",
              margin: "12px 0",
              display: "flex",
            }}
          >
            <Box sx={{ flex: 1, padding: "" }}>
              <Box
                sx={{
                  minHeight: "100px",
                  background: "",
                  margin: "12px 0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ flex: 1, padding: "0 1rem 0 0 " }}>
                  <Typography
                    sx={{
                      color: "#111",
                      // opacity: "0.75",
                      margin: "12px 0",
                      fontWeight: "600",
                      fontSize: "20px",
                      // fontFamily: "'Limelight', cursive",
                    }}
                  >
                    {"Starts : "}
                  </Typography>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      // justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#111",
                        opacity: "0.8",
                        margin: "12px 16px 0 0",

                        fontWeight: "600",
                        fontSize: "16px",
                        // fontFamily: "'Limelight', cursive",
                      }}
                    >
                      {"17:00"}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#111",
                        opacity: "1",
                        margin: "12px 16px 0 0",
                        fontWeight: "600",
                        fontSize: "16px",
                        // fontFamily: "'Limelight', cursive",
                      }}
                    >
                      {"04 Mar 2023"}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flex: 1, padding: "0 0 0 1rem  " }}>
                  <Typography
                    sx={{
                      color: "#111",
                      // opacity: "0.75",
                      margin: "12px 0",
                      fontWeight: "600",
                      fontSize: "20px",
                      // fontFamily: "'Limelight', cursive",
                    }}
                  >
                    {"Ends : "}
                  </Typography>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      // justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#111",
                        opacity: "0.8",
                        margin: "12px 16px 0 0",

                        fontWeight: "600",
                        fontSize: "16px",
                        // fontFamily: "'Limelight', cursive",
                      }}
                    >
                      {"02:00"}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#111",
                        opacity: "1",
                        margin: "12px 16px 0 0",
                        fontWeight: "600",
                        fontSize: "16px",
                        // fontFamily: "'Limelight', cursive",
                      }}
                    >
                      {"05 Mar 2023"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 1, padding: "1rem" }}></Box>
          </Box>
        </Box>
        <Box
          id="print"
          sx={{
            width: "30%",
            minHeight: "550px",
          }}
        >
          <Box
            sx={{
              background: "rgba(255,255,255,.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "550px",
              width: "100%",
              padding: "21px",
            }}
          >
            {imageLoaded ? (
              <Box
                sx={{
                  height: "250px",
                  width: "250px",
                  backgroundImage: `url(${imageSrc})`,
                  backgroundSize: "cover",
                  // background: "red",
                  backgroundPosition: "center",
                }}
              />
            ) : (
              <MyQRCode />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
