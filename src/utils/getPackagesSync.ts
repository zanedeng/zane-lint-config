import { findMonorepoRoot } from "./findMonorepoRoot";
import { getPackagesSync as getPackagesSyncFunc } from "@manypkg/get-packages";

export function getPackagesSync() {
    const root = findMonorepoRoot();
    return getPackagesSyncFunc(root);
}