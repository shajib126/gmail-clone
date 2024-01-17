import React, { useState } from "react";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/MenuItem";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import ChatIcon from "@mui/icons-material/Chat";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelIcon from "@mui/icons-material/Label";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import Box from "@mui/material/Box";

import ErrorIcon from "@mui/icons-material/Error";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForumIcon from "@mui/icons-material/Forum";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const Sidebar = ({ menu }) => {
  const [more, setMore] = useState(false);
  const [category, setCategory] = useState(false);
  return (
    <div>
      {menu ? (
        <Box>
          <MenuItem>
            <IconButton>
              <EditIcon />
            </IconButton>
            <h4>Compose</h4>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <AllInboxIcon />
            </IconButton>
            <h4>Inbox</h4>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <StarBorderIcon />
            </IconButton>
            <h4>stared</h4>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <AccessAlarmIcon />
            </IconButton>
            <h4>Snoozed</h4>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <SendIcon />
            </IconButton>
            <h4>Sent</h4>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <InsertDriveFileIcon />
            </IconButton>
            <h4>Drafts</h4>
          </MenuItem>
          <MenuItem>
            <IconButton onClick={() => setMore(!more)}>
              {more ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            {more ? <h4>Less</h4> : <h4>More</h4>}
          </MenuItem>
          {more && (
            <Box>
              <MenuItem>
                <IconButton>
                  <LabelImportantIcon />
                </IconButton>
                <h4>Important</h4>
              </MenuItem>

              <MenuItem>
                <IconButton>
                  <ChatIcon />
                </IconButton>
                <h4>Chats</h4>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <ScheduleSendIcon />
                </IconButton>
                <h4>Scheduled</h4>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <MarkAsUnreadIcon />
                </IconButton>
                <h4>All mail</h4>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <ReportIcon />
                </IconButton>
                <h4>Spam</h4>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <h4>Trash</h4>
              </MenuItem>
              <MenuItem onClick={() => setCategory(!category)}>
                <IconButton>
                  <LabelIcon />
                </IconButton>
                <h4>Category</h4>
              </MenuItem>

              {category && (
                <Box>
                  <MenuItem>
                    <IconButton>
                      <AccountCircleIcon />
                    </IconButton>
                    <h4>Social</h4>
                  </MenuItem>

                  <MenuItem>
                    <IconButton>
                      <ErrorIcon />
                    </IconButton>
                    <h4>Updated</h4>
                  </MenuItem>
                  <MenuItem>
                    <IconButton>
                      <ForumIcon />
                    </IconButton>
                    <h4>Forums</h4>
                  </MenuItem>
                  <MenuItem>
                    <IconButton>
                      <LoyaltyIcon />
                    </IconButton>
                    <h4>Promotions</h4>
                  </MenuItem>
                </Box>
              )}
            </Box>
          )}

          <MenuItem>
            <IconButton>
              <AddIcon />
            </IconButton>
            <h4>Labels</h4>
          </MenuItem>
        </Box>
      ) : (
        <Box>
          <MenuItem>
            <IconButton>
              <EditIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <AllInboxIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <StarBorderIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <SendIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <SendIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton>
              <InsertDriveFileIcon />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton onClick={() => setMore(!more)}>
              {more ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </MenuItem>
          {more && (
            <Box>
              <MenuItem>
                <IconButton>
                  <LabelImportantIcon />
                </IconButton>
              </MenuItem>

              <MenuItem>
                <IconButton>
                  <ChatIcon />
                </IconButton>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <ScheduleSendIcon />
                </IconButton>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <MarkAsUnreadIcon />
                </IconButton>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <ReportIcon />
                </IconButton>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </MenuItem>
              <MenuItem onClick={() => setCategory(!category)}>
                <IconButton>
                  <LabelIcon />
                </IconButton>
              </MenuItem>

              {category && (
                <Box>
                  <MenuItem>
                    <IconButton>
                      <AccountCircleIcon />
                    </IconButton>
                    <h4>Social</h4>
                  </MenuItem>

                  <MenuItem>
                    <IconButton>
                      <ErrorIcon />
                    </IconButton>
                    <h4>Updated</h4>
                  </MenuItem>
                  <MenuItem>
                    <IconButton>
                      <ForumIcon />
                    </IconButton>
                    <h4>Forums</h4>
                  </MenuItem>
                  <MenuItem>
                    <IconButton>
                      <LoyaltyIcon />
                    </IconButton>
                    <h4>Promotions</h4>
                  </MenuItem>
                </Box>
              )}
            </Box>
          )}

          <MenuItem>
            <IconButton>
              <AddIcon />
            </IconButton>
          </MenuItem>
        </Box>
      )}
    </div>
  );
};

export default Sidebar;
