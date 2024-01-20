import {
  Box,
  Button,
  Card,
  Divider,
  Modal,
  Typography,
} from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import { useStyles } from "./styles";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";

export interface TextDetailsSectionProps {
  headerText: string;
  detailText: string;
  headerVariant: Variant;
  modalTitle?: string;
  modalText?: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function TextDetailsSection(props: TextDetailsSectionProps) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className={classes.cardStyle}>
      <Divider />
      <Button style={{ float: "right" }} onClick={handleOpen}>
        <HelpOutlineIcon></HelpOutlineIcon>
      </Button>
      <Typography variant={props.headerVariant}>{props.headerText}</Typography>
      <Typography variant="body1">{props.detailText}</Typography>
      <Divider />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.modalTitle}
          </Typography>
          <Typography id="modal-modal-description">
            {props.modalText}
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}
