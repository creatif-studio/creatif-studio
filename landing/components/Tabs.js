import React from "react";
import { Box, Tabs, Tab, Tooltip } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function DetailTabs({
  items,
  disabled = [],
  defaultIndex = 0,
  children,
}) {
  const [tabIndex, setTabIndex] = React.useState(defaultIndex);
  const tabsStyles = useTabsStyles();
  const tabItemStyles = useTabItemStyles();

  return (
    <>
      <Tabs
        classes={tabsStyles}
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
      >
        {items.map((item, i) =>
          disabled.includes(i) ? (
            <Tooltip
              title="This feature isn't available yet"
              placement="bottom"
            >
              <span>
                <Tab
                  classes={tabItemStyles}
                  disabled
                  disableRipple
                  label={item}
                  key={i}
                />
              </span>
            </Tooltip>
          ) : (
            <Tab classes={tabItemStyles} disableRipple label={item} key={i} />
          )
        )}
      </Tabs>
      {children.map((child, i) => (
        <TabPanel value={tabIndex} index={i} key={i}>
          {child}
        </TabPanel>
      ))}
    </>
  );
}

const useTabsStyles = makeStyles(({ palette, breakpoints }) =>
  createStyles({
    root: {
      backgroundColor: palette.type === "light" ? "#eee" : palette.divider,
      borderRadius: 10,
      minHeight: 44,
      marginBottom: 30,
    },
    flexContainer: {
      display: "inline-flex",
      position: "relative",
      zIndex: 1,
    },
    scroller: {
      [breakpoints.up("md")]: {
        padding: "0 8px",
      },
    },
    indicator: {
      top: 3,
      bottom: 3,
      right: 3,
      height: "auto",
      background: "none",
      "&:after": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        left: 4,
        right: 4,
        bottom: 0,
        borderRadius: 8,
        backgroundColor:
          palette.type === "light" ? "#fff" : palette.action.selected,
        boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)",
      },
    },
  })
);

const useTabItemStyles = makeStyles(({ palette, breakpoints }) =>
  createStyles({
    root: {
      "&:hover": {
        opacity: 1,
      },
      minHeight: 44,
      minWidth: 96,
      [breakpoints.up("md")]: {
        minWidth: 120,
      },
    },
    wrapper: {
      // zIndex: 2,
      // marginTop: spacing(0.5),
      color: palette.text.primary,
      textTransform: "initial",
    },
  })
);
