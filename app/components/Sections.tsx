"use client";
import Image from "next/image";
import { useState } from "react";
import { Tabs, Card, Space, Tag } from "antd";

function AboutCard() {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <Image
            src="/me2.jpg"
            alt="about"
            width={240}
            height={180}
            className="rounded-xl w-full max-w-[200px] md:max-w-[240px] h-auto"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold mt-0">
            My personal motto
          </h3>
          <p className="text-base md:text-lg">
            Mistakes are not something to be ashamed of, but valuable learning opportunities. I am always ready to embrace challenges and learn from setbacks to grow into a more skilled and capable professional.
          </p>
        </div>
      </div>
    </Card>
  );
}

export function SkillsScroll() {
  const skills: Record<string, string[]> = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "C#"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js (Express.js)", "NestJS", "Electron.js", "MUI", "Tailwind CSS", "Bootstrap", "Ant Design"],
    "Database & ORM": ["PostgreSQL", "Sequelize ORM", "TypeORM"],
    "Tools & Technologies": ["Git", "Docker", "Postman", "Figma", "Arduino"],
  };

  return (
    <div className="mt-2">
      <h3 className="text-2xl md:text-3xl font-semibold">Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="min-w-[280px] snap-start">
            <Card
              title={
                <span className="h-full text-lg md:text-xl ">{group}</span>
              }
            >
              <Space wrap>
                {items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </Space>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationCard() {
  return (
    <Card>
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-6 md:gap-12">
        <div className="flex justify-center md:justify-end">
          <Image
            src="/NULOGO.png"
            alt="about"
            width={240}
            height={180}
            className="w-[140px] sm:w-[180px] md:w-[240px] h-auto"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold">Education</h3>
          <p className="text-base md:text-lg text-zinc-600">
            Computer Engineering, Naresuan University (2022–2025)
          </p>
        </div>
      </div>
    </Card>
  );
}

export default function Sections() {
  const [activeTab, setActiveTab] = useState<string>("about");
  return (
    <div>
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        items={[
          { key: "about", label: "About" },
          { key: "education", label: "Education" },
        ]}
      />

      {activeTab === "about" && <AboutCard />}
      {activeTab === "education" && <EducationCard />}
    </div>
  );
}
