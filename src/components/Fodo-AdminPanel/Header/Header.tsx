import Image from "next/image";
import logo from "../../../../public/img/logo.png";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Popover } from "antd";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const popoverContent = (
    <div>
      <Link className="py-3 px-4" href="/fodo-admin/">
        Profile
      </Link>
      <br />
      <Link className="py-3 px-4" href="/fodo-admin/">
        Settings
      </Link>
      <br />
      <Link className="py-3 px-4" href="/fodo-admin/SignIn/">
        Logout
      </Link>
    </div>
  );
  return (
    <main className="bg-white flex justify-between items-center p-4 sticky top-0 shadow">
      <Link href={"/fodo-admin/"}>
        <Image src={logo} height={35} width={100} alt={""} />
      </Link>
      <Popover
        title="User Name"
        content={popoverContent}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button type="primary">Logged In</Button>
      </Popover>
    </main>
  );
};
