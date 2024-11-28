import { useEffect, useState } from "react";
import { getArticleDispatch } from "./services";
import ContainerHeader from "../../../../common/Title";
import "./index.less";
import CommentIcon from "../../../../components/CommentIcon";
import LikeIcon from "../../../../components/LikeIcon";
import ViewIcon from "../../../../components/ViewIcon";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Tag, Spin } from "antd";
import useRequest from "../../../../hooks/useRequest";
import axios from "axios";

const tags = [
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
  const [currentTag, setCurrentTag] = useState("1");
  const { data, run, loading } = useRequest<ArticleItem[]>({
    request: getArticleDispatch,
  });
  console.log("data: ", data);

  useEffect(() => {
    run({ currentTag });
  }, [currentTag]);
  const clickCard = (item: ArticleItem) => {
    window.open(`https://juejin.cn/post/${item.article_id}`);
  };
  const renderArticleCard = () => {
    return data?.map((item) => {
      return (
        <div
          // key={item.article_id}
          className="article-card"
          onClick={() => clickCard(item)}
        >
          <div className="article-card-title">{item.title}</div>
          <div className="article-card-content">{item.brief_content}</div>
          <div className="article-card-footer">
            <span className="article-flex">
              <StarOutlined />
              {/* <StarFilled /> */}
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
  const onClickTags = (item: { value: string }) => {
    setCurrentTag(item.value);
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
                onClick={() => onClickTags(item)}
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
