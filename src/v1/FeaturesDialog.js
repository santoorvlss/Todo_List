import React from "react";
import Zoom from "@mui/material/Zoom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import { Alert } from "santosh-ui-components";


const Table = styled('table')({
  borderCollapse: "collapse",
  width: '100%',
});

const TableHead = styled('th')({
  textAlign: 'center',
  padding: '8px'
});
const TableData = styled('td')({
  textAlign: 'center',
  padding: '8px'
});

const FeaturesDialog = ({ dialogstate, handleClose,dailogContentText,lastRestoreTime,lastBackupTime, BackupLogicButton,RestoreLogicButton }) => {
  const ButtonStyle = {
    textTransform: "none",
    margin: "0px 15px",
    borderRadius: "6px",
    color: "rgb(94, 53, 177)",
    fontWeight: 600,
    "&:hover": {
      color: "rgb(94, 53, 177)",
      background: "rgb(237, 231, 246)",
    },
  };

  
  return (
    <Dialog
      open={dialogstate}
      TransitionComponent={Zoom}
      keepMounted
      aria-describedby="alert-dialog-zoom-description"
    >
      <DialogTitle
        id="draggable-dialog-title"
        sx={{ background: "rgb(237, 231, 246)" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>Features ✨</div>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography sx={{ margin: "20px 0px" }}>
          <Alert children={dailogContentText} severity="info" />
          </Typography>
          <Table>
  <tr>
  <TableHead>Last Updated</TableHead>
  <TableHead>Action</TableHead>
  </tr>      
  <tr>
{lastBackupTime &&  <>
  <TableData>{lastBackupTime}</TableData>
  <TableData>{BackupLogicButton}</TableData></>
  }
  </tr>
  <tr>
  {lastRestoreTime && <>
  <TableData>{lastRestoreTime}</TableData>
  <TableData>{RestoreLogicButton}</TableData>
  </>}
  </tr>
</Table>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={ButtonStyle} variant="text" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FeaturesDialog;
