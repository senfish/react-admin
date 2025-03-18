import { useEffect, useState } from "react";
import { getArticleDispatch } from "./services";
import ContainerHeader from "@/common/Title";
import "./index.less";
import CommentIcon from "@/components/CommentIcon";
import LikeIcon from "@/components/LikeIcon";
import ViewIcon from "@/components/ViewIcon";
import { StarOutlined } from "@ant-design/icons";
import { Tag, Spin } from "antd";
import { useRequest } from "@hooks";
import Ellipsis from "@/components/Ellipsis";
import { MODULE_MAP, trackRequest } from "@/services/track";

type CurrentTag = "1" | "2" | "3"; // 1最新  2点赞  3收藏

const tags: { name: string; value: CurrentTag }[] = [
  {
    name: "最新",
    value: "1",
  },
  {
    name: "点赞最多",
    value: "2",
  },
  {
    name: "收藏最多",
    value: "3",
  },
];
export interface ArticleItem {
  title: string;
  brief_content: string;
  comment_count: number;
  view_count: number;
  digg_count: number;
  article_id: string;
  collect_count: number;
}

const Hobby = () => {
  const [currentTag, setCurrentTag] = useState<CurrentTag>("1");
  const { data, run, loading } = useRequest<{ currentTag: CurrentTag }, ArticleItem[]>({
    request: getArticleDispatch,
  });
  const { run: setTrackParams } = useRequest({
    request: trackRequest,
  });
  useEffect(() => {
    run({ currentTag });
  }, [currentTag]);
  const clickCard = (item: ArticleItem) => {
    // 发送埋点
    setTrackParams({
      type: 5,
      module: MODULE_MAP.ARTICLE,
    });
    window.open(`https://juejin.cn/post/${item.article_id}`);
  };
  const renderArticleCard = () => {
    return data?.map((item) => {
      return (
        <div key={item.article_id} className="article-card" onClick={() => clickCard(item)}>
          <div className="article-card-title">{item.title}</div>
          <div className="article-card-content">
            <Ellipsis line={2} title={item.brief_content}>
              <span>{item.brief_content}</span>
            </Ellipsis>
          </div>
          <div className="article-card-footer">
            <span className="article-flex">
              <StarOutlined />
              <span className="article-count">{item.collect_count}</span>
            </span>
            <span className="article-flex">
              <ViewIcon />
              <span className="article-count">{item.view_count}</span>
            </span>
            <span className="article-flex">
              <LikeIcon />
              <span className="article-count">{item.digg_count}</span>
            </span>
            <span className="article-flex">
              <CommentIcon />
              <span className="article-count">{item.comment_count}</span>
            </span>
          </div>
        </div>
      );
    });
  };
  const onClickTags = (value: CurrentTag) => {
    setCurrentTag(value);
  };
  return (
    <div className="article-page">
      <ContainerHeader title="技术文章" />
      <Spin spinning={loading}>
        <div className="tags">
          {tags.map((item) => {
            return (
              <Tag
                className={currentTag === item.value ? "active-tag" : ""}
                onClick={() => onClickTags(item.value)}
                key={item.value}
              >
                {item.name}
              </Tag>
            );
          })}
        </div>
        <div className="article-card-wrapper">{renderArticleCard()}</div>
      </Spin>
    </div>
  );
};

export default Hobby;
